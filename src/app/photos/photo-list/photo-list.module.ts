import { NgModule } from '@angular/core';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { PhotoListComponent } from './photo-list.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations : [
        LoadButtonComponent,
        PhotosComponent,
        PhotoListComponent,
        FilterByDescriptionPipe,
        SearchComponent
    ],
    imports : [
        CommonModule,
        PhotoModule,
        CardModule // TODO verificar com o codigo do curso - diferença video/transcrição
        
    ]
})
export class PhotoListModule {

}