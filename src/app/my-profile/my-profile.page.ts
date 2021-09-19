import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, filter, catchError, mergeMap} from 'rxjs/operators';
//import { MenuBarComponent } from '../menu-bar/menu-bar.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
  //entryComponents: [MenuBarComponent]
})
export class MyProfilePage implements OnInit {
  avatarURL: string = ''
  usermobileNo: string = ''
  userdisplayName: string = ''
  myUserID: string = ''
  fileToUpload: File = null;

  constructor(private httpObj: HttpClient) { }

  ngOnInit() {
    this.myUserID = localStorage.getItem("UserID");
    let innerThis=this;
    this.httpObj.get('https://rukshanMobileApp.artsuit.ca/index.php/MainController/getUserData?myUserID='+this.myUserID).pipe(map((res:any)=>{return res;})).subscribe(data => {
      innerThis.userdisplayName = data['username'];
      innerThis.usermobileNo = data['mobileNumber'];
      innerThis.avatarURL = "https://rukshanmobileapp.artsuit.ca/"+data['avatarURL'];
  });
  }
  handleFileInput(event: { target: { files: File[]; }; }){ this.fileToUpload=event.target.files[0]; }

  updateUserProfile(event:any){
    let formData=new FormData();
    formData.append("userID",this.myUserID);
    formData.append("userdisplayName",this.userdisplayName);
    formData.append("usermobileNo",this.usermobileNo);
    formData.append("fileToUpload",this.fileToUpload);
    this.httpObj.post<FormData>('https://rukshanMobileApp.artsuit.ca/index.php/MainController/updateUserProfile',formData).subscribe(data => {
      alert(data['message']);
      window.location.reload()
    });

  }

}
