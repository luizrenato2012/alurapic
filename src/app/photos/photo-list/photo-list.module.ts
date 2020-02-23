import { NgModule } from '@angular/core';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { PhotoListComponent } from './photo-list.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
    declarations : [
        LoadButtonComponent,
        PhotosComponent,
        PhotoListComponent,
        FilterByDescriptionPipe
    ],
    imports : [
        CommonModule,
        PhotoModule
    ]
})
export class PhotoListModule {

}