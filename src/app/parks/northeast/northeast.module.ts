import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NortheastPageRoutingModule } from './northeast-routing.module';

import { NortheastPage } from './northeast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NortheastPageRoutingModule
  ],
  declarations: [NortheastPage]
})
export class NortheastPageModule {}
