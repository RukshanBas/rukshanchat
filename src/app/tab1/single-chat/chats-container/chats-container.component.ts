import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, Input } from '@angular/core';
import { ChatTextComponent } from '../chat-text/chat-text.component';
import { ChatAttachmentComponent } from '../chat-attachment/chat-attachment.component';
import {map, filter, catchError, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-chats-container',
  templateUrl: './chats-container.component.html',
  styleUrls: ['./chats-container.component.scss'],
  entryComponents: [ChatTextComponent, ChatAttachmentComponent]
})
export class ChatsContainerComponent implements OnInit {
  myUserID:string=""
  @Input() opponentID:string=""
  constructor(private httpObj:HttpClient, private cfr: ComponentFactoryResolver) { }
  @ViewChild('allChats',{static: true,read: ViewContainerRef}) singleChat: ViewContainerRef;

  ngOnInit() {
    this.myUserID = localStorage.getItem("UserID");
    var innerThis = this;
      this.singleChat.clear();
      this.httpObj.get('https://rukshanmobileapp.artsuit.ca/index.php/Chats/getChatsBetween?userIDToServer='+innerThis.myUserID+'&opponentIDToServer='+innerThis.opponentID).pipe(map((res:any)=>{return res;})).subscribe(data => {
        if (data != null) {
          data.forEach((element:any) => {
            if (element.resourceURL!=null) {
              const factory = innerThis.cfr.resolveComponentFactory(ChatAttachmentComponent);
              const componentRef = innerThis.singleChat.createComponent(factory);
              componentRef.instance.chatMessage=element.chatMessage;
              componentRef.instance.attachmentURL="https://rukshanmobileapp.artsuit.ca/"+element.resourceURL;
              if(element.senderID==innerThis.myUserID){
                componentRef.instance.byMe=true;
                componentRef.instance.buttonColor="success";
              }
              else{ componentRef.instance.byMe=false; componentRef.instance.buttonColor="primary"; }
            }
            else {
              const factory = innerThis.cfr.resolveComponentFactory(ChatTextComponent);
              const componentRef = innerThis.singleChat.createComponent(factory);
              componentRef.instance.chatMessage=element.chatMessage;
              if(element.senderID==innerThis.myUserID){
                componentRef.instance.byMe=true;
                componentRef.instance.buttonColor="success";
              }
              else{ componentRef.instance.byMe=false; componentRef.instance.buttonColor="primary"; }
            }
          });
        } else {
        }
      });
  }
}
