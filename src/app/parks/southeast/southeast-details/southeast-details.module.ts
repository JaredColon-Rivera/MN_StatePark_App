import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoutheastDetailsPageRoutingModule } from './southeast-details-routing.module';

import { SoutheastDetailsPage } from './southeast-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoutheastDetailsPageRoutingModule
  ],
  declarations: [SoutheastDetailsPage]
})
export class SoutheastDetailsPageModule {}
