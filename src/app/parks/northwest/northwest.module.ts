import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NorthwestPageRoutingModule } from './northwest-routing.module';

import { NorthwestPage } from './northwest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NorthwestPageRoutingModule
  ],
  declarations: [NorthwestPage]
})
export class NorthwestPageModule {}
