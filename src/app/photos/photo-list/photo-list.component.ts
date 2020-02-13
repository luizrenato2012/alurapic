import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos  : Object[] = [];
  
  constructor(private service : PhotoService) { }

  ngOnInit() {
    this.service.listFromUser('flavio')
    .subscribe(photos => {
       this.photos = photos;
       console.log(JSON.stringify(this.photos));

    }, err => console.log(err.message));
  }

}
