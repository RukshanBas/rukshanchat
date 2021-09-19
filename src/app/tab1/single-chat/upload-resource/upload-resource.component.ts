import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-upload-resource',
  templateUrl: './upload-resource.component.html',
  styleUrls: ['./upload-resource.component.scss'],
})
export class UploadResourceComponent implements OnInit {
  myUserID: string = ''
  fileToUpload: File = null;
  @Input() opponentID:string=""
  caption: string=""

  constructor(private mc: ModalController, private httpObj: HttpClient) { }
  ngOnInit() {}
  closeModal() {
    this.mc.dismiss({
      'dismissed': true
    });
  }

  handleFileInput(event: { target: { files: File[]; }; }){ this.fileToUpload=event.target.files[0]; }

  uploadResource(event:any){
    this.myUserID = localStorage.getItem("UserID");
    let formData=new FormData();
    formData.append("userID",this.myUserID);
    formData.append("opponentID",this.opponentID);
    formData.append("caption",this.caption);
    formData.append("fileToUpload",this.fileToUpload);
    this.httpObj.post<FormData>('https://rukshanMobileApp.artsuit.ca/index.php/Chats/uploadresourceforchat',formData).subscribe(data => {
      alert(data['message']);
      window.location.reload()
    });
  }

}
