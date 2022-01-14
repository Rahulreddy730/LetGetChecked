import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:5000/articles/');
  }
  getArtile(key: string): Observable<Article> {
    return this.http.get<Article>('http://localhost:5000/articles/' + key);
  }
}
