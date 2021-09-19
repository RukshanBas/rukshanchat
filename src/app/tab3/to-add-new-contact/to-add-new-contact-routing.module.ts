import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToAddNewContactPage } from './to-add-new-contact.page';

const routes: Routes = [
  {
    path: '',
    component: ToAddNewContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToAddNewContactPageRoutingModule {}
