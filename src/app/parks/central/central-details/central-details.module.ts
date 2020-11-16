import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentralDetailsPageRoutingModule } from './central-details-routing.module';

import { CentralDetailsPage } from './central-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentralDetailsPageRoutingModule
  ],
  declarations: [CentralDetailsPage]
})
export class CentralDetailsPageModule {}
