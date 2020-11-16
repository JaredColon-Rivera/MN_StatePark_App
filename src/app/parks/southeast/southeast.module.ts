import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoutheastPageRoutingModule } from './southeast-routing.module';

import { SoutheastPage } from './southeast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoutheastPageRoutingModule
  ],
  declarations: [SoutheastPage]
})
export class SoutheastPageModule {}
