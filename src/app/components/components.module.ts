import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CarCardComponent } from './car-card/car-card.component';



@NgModule({
  declarations: [
    NavBarComponent,
    CarCardComponent
  ],
  exports: [
    NavBarComponent,
    CarCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ComponentsModule { }
