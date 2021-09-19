import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MenuBarModule } from '../menu-bar/menu-bar.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ChatRowModule } from './chat-row/chat-row.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    MenuBarModule,
    ChatRowModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}

