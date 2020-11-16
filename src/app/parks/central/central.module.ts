import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentralPageRoutingModule } from './central-routing.module';

import { CentralPage } from './central.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentralPageRoutingModule
  ],
  declarations: [CentralPage]
})
export class CentralPageModule {}
