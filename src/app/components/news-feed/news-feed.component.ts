import { Component, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.sass']
})
export class NewsFeedComponent {
  public orderTypes: SelectItem[] = [
    {
      label: 'Latest',
      value: 'desc'
    },
    {
      label: 'Oldest',
      value: 'acs'
    },
  ];
  public selectOrder: SelectItem;
  public posts = [];
  
}
