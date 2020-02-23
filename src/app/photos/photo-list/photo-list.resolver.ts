
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Injectable({ providedIn: "root" })
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

    constructor(private photService : PhotoService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
        let userName = route.params.userName;
        //let page:number = route.queryParams.page;
        let page:number = 1; //fixado para testes sem parametro de paginacao
        return this.photService.listFromUserPaginated(userName, page);
    }
}
