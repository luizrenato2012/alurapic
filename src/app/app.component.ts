import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoService } from './photos/photo/photo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  photos  : Object[] = [];

  constructor(private service : PhotoService) {
  }

  ngOnInit(): void {
    this.service.listFromUser('flavio')
      .subscribe(photos => {
         this.photos = photos;
         console.log(JSON.stringify(this.photos));

      }, err => console.log(err.message));
  
  }

}
