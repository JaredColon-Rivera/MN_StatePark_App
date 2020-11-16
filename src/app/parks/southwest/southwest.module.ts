import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SouthwestPageRoutingModule } from './southwest-routing.module';

import { SouthwestPage } from './southwest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SouthwestPageRoutingModule
  ],
  declarations: [SouthwestPage]
})
export class SouthwestPageModule {}
