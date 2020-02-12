import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PhotoModule } from './photos/photo/photo.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    PhotoModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
