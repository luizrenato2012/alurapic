import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { Routes, RouterModule } from '@angular/router';
import { ErrorsModule } from './errors/errors.module';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
    { path: 'user/:userName', component: PhotoListComponent },
    { path: 'p/add', component: PhotoFormComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports : [ RouterModule.forRoot(routes),
                ErrorsModule ],
    exports : [ RouterModule, ErrorsModule ]
})
export class AppRoutingModule {

}