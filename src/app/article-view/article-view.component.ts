import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css'],
})
export class ArticleViewComponent implements OnInit {
  article: Article = new Article();
  requiredForm!: FormGroup;
  comment = '';
  postComment: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router,
    private titleService: Title,
    private commonService: CommonService,
    private meta: Meta,
    private fb: FormBuilder
  ) {}

  postComments() {
    this.postComment.push(this.comment);
    this.comment = '';
  }

  ngOnInit() {
    this.requiredForm = this.fb.group({
      comment: ['', Validators.required],
    });

    this.route.params.subscribe((params) => {
      const key = params['key'];

      this.articleService.getArtile(key).subscribe((article) => {
        if (article === undefined) {
          this.router.navigateByUrl('');
          return;
        }
        this.article = article;
        this.titleService.setTitle(
          `${this.article.title} - ${this.commonService.title}`
        );
        this.meta.addTags([
          {
            name: 'description',
            content: this.article.description,
          },
          {
            property: 'og:title',
            content: `${this.article.title} - ${this.commonService.title}`,
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            property: 'og:url',
            content: this.commonService.baseUrl + this.article.key,
          },
          {
            property: 'og:image',
            content: this.article.imageUrl,
          },
          {
            property: 'og:description',
            content: this.article.description,
          },
        ]);
      });
    });
  }
}
