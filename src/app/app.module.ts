import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {ForumModule} from './forum/forum.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ForumModule,
    BrowserModule,
    RouterModule.forRoot([{path: '', redirectTo: '/posts' , pathMatch: 'full'}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
