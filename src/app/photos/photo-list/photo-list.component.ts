import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { Subject } from 'rxjs';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos  : Photo[] = [];
  filter : string = '';
  subject : Subject<string> = new Subject<string>();

  constructor(private activactedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.photos = this.activactedRoute.snapshot.data.photos;
    this.subject.subscribe(valor => this.filter = valor);
  }

  ngOnDestroy(): void {
    this.subject.unsubscribe();
  }

}
