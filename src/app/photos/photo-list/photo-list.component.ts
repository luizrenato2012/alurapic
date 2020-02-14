import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos  : Photo[] = [];
  
  constructor(private service : PhotoService,
              private activactedRoute : ActivatedRoute) { }

  ngOnInit() {
    let userName = this.activactedRoute.snapshot.params.userName;
    this.service.listFromUser(userName)
    .subscribe(photos => {
       this.photos = photos;
       console.log(JSON.stringify(this.photos));

    }, err => console.log(err.message));
  }

}
