import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { BlogListComponent } from './blog-list/blog-list.component';

const routes: Routes = [
  { path: 'blogarticle', component: BlogListComponent },
  { path: 'add-blog', component: AddBlogComponent },
  { path: '', component: BlogListComponent },
  { path: ':key', component: ArticleViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
