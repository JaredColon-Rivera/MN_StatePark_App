import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NortheastDetailsPageRoutingModule } from './northeast-details-routing.module';

import { NortheastDetailsPage } from './northeast-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NortheastDetailsPageRoutingModule
  ],
  declarations: [NortheastDetailsPage]
})
export class NortheastDetailsPageModule {}
