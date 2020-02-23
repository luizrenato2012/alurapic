import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    PhotoComponent
  ],
  imports : [
    HttpClientModule,
    CommonModule
  ],
  exports : [
    PhotoComponent
  ]

})
export class PhotoModule { }
