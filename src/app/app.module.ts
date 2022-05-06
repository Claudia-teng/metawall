import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { AddPostComponent } from './components/add-post/add-post.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { ActionButtonsComponent } from './components/shared/action-buttons/action-buttons.component';
import { PostComponent } from './components/shared/post/post.component';
import { TopbarComponent } from './components/shared/topbar/topbar.component';


const FEATURE_COMPONENT = [
  NewsFeedComponent,
  AddPostComponent
]

const SHARED_COMPONENT = [
  TopbarComponent,
  PostComponent,
  ActionButtonsComponent
]

@NgModule({
  declarations: [
    AppComponent,
    ...FEATURE_COMPONENT,
    ...SHARED_COMPONENT
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
