import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ap-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input()
  title : string = "";

  ngOnInit() {
  }

}
