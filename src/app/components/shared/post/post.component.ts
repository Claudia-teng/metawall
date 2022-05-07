import { Component, Input } from '@angular/core';
import { Post } from 'src/app/model';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent {
  @Input() post: Post;
  
}
