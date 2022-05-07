import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Post } from 'src/app/model';
import { NewsFeedService } from 'src/app/service';

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
      value: 'asc'
    },
  ];
  public selectedOrder: SelectItem = this.orderTypes[0];
  public searchInput: string
  public loading: boolean;
  public posts: Post[];

  constructor(private newsFeedService: NewsFeedService ) {}

  ngOnInit(): void {
    this.onSearch();
  }

  public onSearch(): void {
    this.loading = true;
    // this.newsFeedService.getAllPosts(this.selectedOrder.value, this.searchInput).subscribe(res => {
    //   // this.loading = false;
    //   this.posts = res;
    // })
  }

}
