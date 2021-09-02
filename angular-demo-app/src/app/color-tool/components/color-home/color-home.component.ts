import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Color } from '../../models/colors';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  headerText = "Color Tool";

  colors: Color[] = [];

  colorForm!: FormGroup;
  
  // fb: FormBuilder;

  // constructor(fb: FormBuilder) {
  //   this.fb = fb;
  // }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.colorForm = this.fb.group({
      name: '',
      hexcode: '',
    });
  }

  addColor() {
    this.colors = [
      ...this.colors,
      {
        ...this.colorForm.value,
        id: Math.max(...this.colors.map(c => c.id), 0) + 1,
      }
    ];

    this.colorForm.reset();
  }

}
