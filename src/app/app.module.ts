import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HitCounterComponent } from './hit-counter/hit-counter.component';
import { GuestBookComponent } from './guest-book/guest-book.component';
import { TextAreaComponent } from './text-area/text-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HitCounterComponent,
    GuestBookComponent,
    TextAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
