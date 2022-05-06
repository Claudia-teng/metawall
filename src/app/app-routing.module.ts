import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';

const routes: Routes = [
  {
    path: '', 
    component: NewsFeedComponent
  },
  {
    path: 'news-feed', 
    component: NewsFeedComponent
  },
  {
    path: 'add-post', 
    component: AddPostComponent
  },
  { 
    path: '**', 
    component: NewsFeedComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
