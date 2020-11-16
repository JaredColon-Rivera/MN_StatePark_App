import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MetroDetailPageRoutingModule } from './metro-detail-routing.module';

import { MetroDetailPage } from './metro-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MetroDetailPageRoutingModule
  ],
  declarations: [MetroDetailPage]
})
export class MetroDetailPageModule {}
