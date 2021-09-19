import { Component,OnInit,ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import {HttpClient} from '@angular/common/http';
import {map, filter, catchError, mergeMap} from 'rxjs/operators';
import { Router } from '@angular/router';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  entryComponents: [ContactComponent, MenuBarComponent]
})
export class Tab3Page {

  constructor(private httpObj: HttpClient, private cfr: ComponentFactoryResolver, private router: Router) {}
  @ViewChild('forContacts',{static: true,read: ViewContainerRef}) forContacts: ViewContainerRef;

  ngOnInit(){
    var innerThis = this; 
    let userID = localStorage.getItem("UserID");
    this.httpObj.get('https://rukshanMobileApp.artsuit.ca/index.php/Contact/getAllContacts?userID='+userID).pipe(map((res:any)=>{return res;})).subscribe(data => {
    if (data.length != 0 && data != null) {
      data.forEach((element: any) => {
      
        const factory = this.cfr.resolveComponentFactory(ContactComponent);
        const componentRef = this.forContacts.createComponent(factory);
        componentRef.instance.contactName=element.contactName;
        componentRef.instance.contactNumber=element.mobileNumber;
        componentRef.instance.contactUserID=element.contactUserID;

        
      });
    }
     });
  }

}

