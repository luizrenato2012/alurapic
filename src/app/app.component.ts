import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    this.http.get("http://localhost:3000/flavio/photos")
      .subscribe(returno => this.photos);
  
  }

  constructor(private http : HttpClient) {

  }

  photos  = [];
}
