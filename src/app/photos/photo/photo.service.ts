import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = "http://localhost:3000";

@Injectable({providedIn : 'root'})
export class PhotoService {

    constructor(private http : HttpClient) {}

    listFromUser(username:string) : Observable <Photo[]> {
        return this.http.get<Photo[]>(API + "/" + username + '/photos');
    }

    listFromUserPaginated(username:string, pageNumber : number) : Observable <Photo[]> {
        let params = new HttpParams().append("page", pageNumber.toString());
        return this.http.get<Photo[]>(API + "/" + username + '/photos' , {params});
    }
    

}