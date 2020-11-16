import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParksPageRoutingModule } from './parks-routing.module';

import { ParksPage } from './parks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParksPageRoutingModule
  ],
  declarations: [ParksPage]
})
export class ParksPageModule { }
