import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SingleChatPageRoutingModule } from './single-chat-routing.module';
import { SingleChatPage } from './single-chat.page';
import { MenuBarModule } from '../../menu-bar/menu-bar.module';
import { ChatsContainerModule } from './chats-container/chats-container.module';
import { SendChatFormModule } from './send-chat-form/send-chat-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleChatPageRoutingModule,
    MenuBarModule,
    ChatsContainerModule,
    SendChatFormModule
  ],
  declarations: [SingleChatPage]
})
export class SingleChatPageModule {}
