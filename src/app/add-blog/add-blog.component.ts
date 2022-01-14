import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent implements OnInit {
  title = 'Add Blog';
  constructor(
    private titleService: Title,
    private CommonService: CommonService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(`${this.title} - ${this.CommonService.title}`);
  }
}
