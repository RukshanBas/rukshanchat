import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, filter, catchError, mergeMap} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private httpObj: HttpClient, private router: Router) { }
  Login(username:string,pw:string) {
    let formData=new FormData();
      formData.append("unToServer",username);
      formData.append("pwToServer",pw);
      this.httpObj.post<FormData>('https://rukshanmobileapp.artsuit.ca/index.php/MainController/login',formData).subscribe(data => {
       
      if (data['result']) {
          alert(data['message']); 
         localStorage.setItem("UserID", data['userID']);
         this.router.navigateByUrl('chats');
           
        } else {
          alert(data['message']); 
        }
});
   
  }
  gotoSignUp() {
    this.router.navigateByUrl('signUp');
  }
  ngOnInit() {

  }

}
