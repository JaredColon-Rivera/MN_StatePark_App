import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NorthwestDetailsPageRoutingModule } from './northwest-details-routing.module';

import { NorthwestDetailsPage } from './northwest-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NorthwestDetailsPageRoutingModule
  ],
  declarations: [NorthwestDetailsPage]
})
export class NorthwestDetailsPageModule {}
