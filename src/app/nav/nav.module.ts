import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ NavComponent ],
  declarations: [ NavComponent ]
})
export class NavModule { }
