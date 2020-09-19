import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SafePipe } from './app.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
