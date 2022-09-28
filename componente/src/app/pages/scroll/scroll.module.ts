import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ScrollPageRoutingModule } from './scroll-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ScrollPage } from './scroll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ScrollPageRoutingModule
  ],
  declarations: [ScrollPage]
})
export class ScrollPageModule {}

   
