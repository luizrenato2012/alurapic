import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PhotoModule } from './photos/photo/photo.module';

import { AppComponent } from './app.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PhotoFormComponent
  ],
  imports: [
    BrowserModule,
    PhotoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
