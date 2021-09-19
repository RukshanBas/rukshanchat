import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-chat-row',
  templateUrl: './chat-row.component.html',
  styleUrls: ['./chat-row.component.scss'],
})
export class ChatRowComponent implements OnInit {

  constructor(private router:Router) { }

  @Input() opponentID:string = ""
  @Input() opponentName:string = ""
  @Input() opponentAvatarURL:string = ""

  ngOnInit() {}
  toSingleChat(event:any,opponentID:string){
    this.router.navigate(['toSingleChat/'+opponentID]);
  }

}
