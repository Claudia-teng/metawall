import { Component } from '@angular/core';

@Component({
  selector: 'news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.sass']
})
export class NewsFeedComponent {
  public posts = [];
  
}
