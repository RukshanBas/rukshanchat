import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-chat-attachment',
  templateUrl: './chat-attachment.component.html',
  styleUrls: ['./chat-attachment.component.scss'],
})
export class ChatAttachmentComponent implements OnInit {
  @Input() chatMessage: string="";
  @Input() byMe: boolean = false;
  @Input() attachmentURL: string="";
  @Input() buttonColor: string="light";
  constructor() { }
  ngOnInit() {}
}
