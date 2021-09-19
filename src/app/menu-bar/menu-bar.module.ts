import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular';
import { MenuBarComponent } from './menu-bar.component';
@NgModule({
  declarations: [MenuBarComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [MenuBarComponent]
})
export class MenuBarModule { }
