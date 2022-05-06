import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { LoginComponent } from './view/login/login.component';
import { MainComponent } from './view/main/main.component';
import { SignupComponent } from './view/signup/signup.component';

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'signup', 
    component: SignupComponent 
  },
  {
    path: 'pages', 
    // todo - add auth guard
    component: MainComponent,
    children: [
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
    ]
  },
  { 
    path: '**', 
    component: LoginComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
