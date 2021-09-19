import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-chat-text',
  templateUrl: './chat-text.component.html',
  styleUrls: ['./chat-text.component.scss'],
})
export class ChatTextComponent implements OnInit {
  @Input() chatMessage: string="";
  @Input() byMe: boolean = false;
  @Input() buttonColor: string="light";
  constructor() { }
  ngOnInit() {}
}
