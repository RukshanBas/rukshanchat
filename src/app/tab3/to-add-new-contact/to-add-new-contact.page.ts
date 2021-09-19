import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, filter, catchError, mergeMap} from 'rxjs/operators';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';

@Component({
  selector: 'app-to-add-new-contact',
  templateUrl: './to-add-new-contact.page.html',
  styleUrls: ['./to-add-new-contact.page.scss'],
  entryComponents: [MenuBarComponent]
})
export class ToAddNewContactPage implements OnInit {

  constructor(private httpObj:HttpClient) { }

  ngOnInit() {
  }
  addNewContact(event:any,contactName:string,contactMobile:string){
    let userID = localStorage.getItem("UserID");
    let formData=new FormData();
      formData.append("userID",userID);
      formData.append("contactNameToServer",contactName);
      formData.append("contactMobileToServer",contactMobile);
      this.httpObj.post<FormData>('https://rukshanmobileapp.artsuit.ca/index.php/Contact/newContact',formData).subscribe(data => {
        alert(data['message']);
});
   
  }

}
