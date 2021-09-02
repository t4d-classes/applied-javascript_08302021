import { Component, OnInit, Input } from '@angular/core';

import { Color } from '../../models/colors';

@Component({
  selector: '.app-color-list-item',
  templateUrl: './color-list-item.component.html',
  styleUrls: ['./color-list-item.component.css']
})
export class ColorListItemComponent implements OnInit {

  @Input()
  color!: Color;

  constructor() { }

  ngOnInit(): void {
  }

}
