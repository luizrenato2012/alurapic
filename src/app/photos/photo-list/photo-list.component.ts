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
  filter : string = '';
  
  constructor(private activactedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.photos = this.activactedRoute.snapshot.data.photos;
  }

}
