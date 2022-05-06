import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// PrimeNG
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

// Components
import { AddPostComponent } from './components/add-post/add-post.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { ActionButtonsComponent } from './components/shared/action-buttons/action-buttons.component';
import { PostComponent } from './components/shared/post/post.component';
import { TopbarComponent } from './components/shared/topbar/topbar.component';
import { MobileActionButtonsComponent } from './components/shared/mobile-action-buttons/mobile-action-buttons.component';


const FEATURE_COMPONENT = [
  NewsFeedComponent,
  AddPostComponent
]

const SHARED_COMPONENT = [
  TopbarComponent,
  PostComponent,
  ActionButtonsComponent,
  MobileActionButtonsComponent
]

const PRIME_NG = [
  DropdownModule,
  ButtonModule
]

@NgModule({
  declarations: [
    AppComponent,
    ...FEATURE_COMPONENT,
    ...SHARED_COMPONENT
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ...PRIME_NG
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
