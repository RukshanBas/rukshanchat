import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatsContainerComponent } from './chats-container.component'
import { ChatTextModule } from '../chat-text/chat-text.module';
import { ChatAttachmentModule } from '../chat-attachment/chat-attachment.module';
@NgModule({
  declarations: [ChatsContainerComponent],
  imports: [
    CommonModule,
    ChatTextModule,
    ChatAttachmentModule
  ]
})
export class ChatsContainerModule { }