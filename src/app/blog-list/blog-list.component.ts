import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService,
    private titleService: Title,
    private CommonService: CommonService) {}

  ngOnInit(): void {
    this.titleService.setTitle(
      `${this.CommonService.title}`);
    this.getArticles();
  }

  getArticles(): void {
    this.articleService
      .getArticles()
      .subscribe(articles => (this.articles = articles));
  }
}
