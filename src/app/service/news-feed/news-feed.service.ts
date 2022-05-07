import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "src/app/model";

@Injectable({ providedIn: 'root' })

export class NewsFeedService {
  constructor(
    private http: HttpClient,
  ) { }

  public getAllPosts(timeSort: string = 'asc', q: string = ''): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(`https://metawall-api.herokuapp.com/posts?timeSort=${timeSort}&q=${q}`);
  }

}