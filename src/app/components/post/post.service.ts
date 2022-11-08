import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${environment.baseUrl}/api/create/post`, post)
  }

  getPosts(): Observable<Post> {
    return this.http.get<Post>(`${environment.baseUrl}/get/posts`)
  }

  getPost(post: number): Observable<Post> {
    return this.http.get<Post>(`${environment.baseUrl}/get/post/`+post)
  }
}
