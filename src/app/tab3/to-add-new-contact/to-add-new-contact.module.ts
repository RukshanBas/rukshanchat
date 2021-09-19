import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToAddNewContactPageRoutingModule } from './to-add-new-contact-routing.module';

import { ToAddNewContactPage } from './to-add-new-contact.page';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuBarModule,
    ToAddNewContactPageRoutingModule
  ],
  declarations: [ToAddNewContactPage]
})
export class ToAddNewContactPageModule {}
