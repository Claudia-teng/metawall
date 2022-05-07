import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AddPost } from 'src/app/model/add-post.model';
import { AddPostService } from 'src/app/service';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.sass']
})
export class AddPostComponent {

  public content: string;
  public imageUrl: string;

  constructor(private addPostService: AddPostService,
              private router: Router) {}

  public onSubmit(): void {
    const addPost: AddPost = {
      userId: '6275e4baa71de3da4d87ce76',
      image: this.imageUrl,
      content: this.content,
    }
    this.addPostService.addPost(addPost).subscribe(res => {
      this.router.navigate(['/pages/news-feed']);
    })
  }
}
