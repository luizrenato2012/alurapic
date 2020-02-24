import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos  : Photo[] = [];
  filter : string = '';
  subject : Subject<string> = new Subject<string>();

  hasMore = true;
  currrentPage:number = 1;
  userName : string  = "";

  constructor(private activactedRoute : ActivatedRoute,
              private service : PhotoService) { }

  ngOnInit() {
    this.photos = this.activactedRoute.snapshot.data.photos;
    this.subject
      .pipe( debounceTime (300))
      .subscribe(valor => this.filter = valor);
  }

  ngOnDestroy(): void {
    this.subject.unsubscribe();
  }

  load() {
    this.userName = this.activactedRoute.snapshot.params.userName;
    this.service.listFromUserPaginated(this.userName, ++this.currrentPage)
      .subscribe(photos => {
        this.photos = photos;//this.photos.concat(photos);
        this.filter = "";
        if (!photos.length) this.hasMore = false;
      });
  }

}
