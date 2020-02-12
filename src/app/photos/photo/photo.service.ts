import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const API = "http://localhost:3000";

@Injectable({providedIn : 'root'})
export class PhotoService {

    constructor(private http : HttpClient) {}

    listFromUser(username:string) : Observable <Object[]> {
        return this.http.get<Object[]>(API + "/" + username + '/photos');
    }

}