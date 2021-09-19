import { Component, ComponentFactoryResolver, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UploadResourceComponent } from '../upload-resource/upload-resource.component';
import { ModalController } from '@ionic/angular';
import { PhotoService } from '../../../services/photo.service';

@Component({
  selector: 'app-send-chat-form',
  templateUrl: './send-chat-form.component.html',
  styleUrls: ['./send-chat-form.component.scss'],
})

export class SendChatFormComponent implements OnInit {
  private forRoute:any;
  textInput:string=""
  myUserID:string=""
  @Input() opponentID:string=""
  @Output() toChatContainer = new EventEmitter();
  modal: any
  constructor(private httpObj:HttpClient, private mc: ModalController, private cfr: ComponentFactoryResolver, public ps: PhotoService) { }

  /*addPhotoToGallery(event: any) {
    this.ps.addNewToGallery();
  }*/

  ngOnInit() { }

  sendChat(event:any,chatText:string) {
    this.myUserID = localStorage.getItem("UserID");
    var innerThis = this;
    let formData=new FormData();
    formData.append("myUserID",this.myUserID);
    formData.append("opponentID",this.opponentID);
    formData.append("chatMessage",this.textInput);
    this.httpObj.post<FormData>('https://rukshanmobileapp.artsuit.ca/index.php/Chats/feedChat',formData).subscribe(data => {
      innerThis.textInput = "";
      innerThis.toChatContainer.emit(null);
   });
  }
  
  async presentModal() {
    var innerThis = this;
    this.modal = await this.mc.create({
      component: UploadResourceComponent,
      cssClass: 'my-custom-class',
      componentProps: { opponentID: innerThis.opponentID }
    });
    return await this.modal.present();
  }
}
