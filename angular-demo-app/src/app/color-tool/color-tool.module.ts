import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { ColorListItemComponent } from './components/color-list-item/color-list-item.component';
import { ColorFormComponent } from './components/color-form/color-form.component';

@NgModule({
  declarations: [
    ColorHomeComponent,
    ColorListComponent,
    ColorListItemComponent,
    ColorFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    ColorHomeComponent,
  ]
})
export class ColorToolModule { }
