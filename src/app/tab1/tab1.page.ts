import { Component,OnInit,ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ChatRowComponent } from './chat-row/chat-row.component';
import {HttpClient} from '@angular/common/http';
import {map, filter, catchError, mergeMap} from 'rxjs/operators';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  entryComponents: [ChatRowComponent, MenuBarComponent]
})
export class Tab1Page {

  myUserID:string = "";
  constructor(private httpObj: HttpClient, private cfr: ComponentFactoryResolver) {}
  @ViewChild('chatRows',{static: true,read: ViewContainerRef}) forChatRow: ViewContainerRef;
  ngOnInit(){
    this.myUserID = localStorage.getItem("UserID");
    let innerThis=this;
    this.httpObj.get('https://rukshanMobileApp.artsuit.ca/index.php/Chats/listChatsForUser?userID='+this.myUserID).pipe(map((res:any)=>{return res;})).subscribe(data => {
    data.forEach((element:any)=>{
    const factory = innerThis.cfr.resolveComponentFactory(ChatRowComponent);
        const componentRef = innerThis.forChatRow.createComponent(factory);
        componentRef.instance.opponentID=element.id;
        componentRef.instance.opponentName=element.username;
        componentRef.instance.opponentAvatarURL="https://rukshanmobileapp.artsuit.ca/"+element.avatarURL;
    });
});
}
}

