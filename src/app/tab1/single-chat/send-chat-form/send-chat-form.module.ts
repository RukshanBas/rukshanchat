import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendChatFormComponent } from './send-chat-form.component'
import { FormsModule } from '@angular/forms';
import { UploadResourceModule } from '../upload-resource/upload-resource.module';
@NgModule({
  declarations: [SendChatFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    UploadResourceModule
  ]
})
export class SendChatFormModule { }
