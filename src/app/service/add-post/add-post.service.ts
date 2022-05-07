import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AddPost } from "src/app/model";

@Injectable({ providedIn: 'root' })

export class AddPostService {
  constructor(
    private http: HttpClient,
  ) { }

  public addPost(addPost: AddPost): Observable<AddPost> {
    return this.http.post<AddPost>(`https://metawall-api.herokuapp.com/posts`, addPost);
  }

}