import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Input() contactName:string = ""
  @Input() contactNumber:string = ""
  @Input() contactUserID:string = ""


  constructor() { }

  ngOnInit() {}

}
