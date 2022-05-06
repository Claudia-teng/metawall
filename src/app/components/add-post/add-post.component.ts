import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.sass']
})
export class AddPostComponent {
  @ViewChild("postTextarea") postTextarea: ElementRef;

  ngAfterViewInit() {
    this.postTextarea.nativeElement.focus();
  }
}
