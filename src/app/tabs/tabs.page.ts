import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  
  constructor(private router: Router) {}

  ngOnInit() {
    //check local storage whether the user is logged in or not
    //if the user is not logged in: redirect him to the login page
    let userID = localStorage.getItem("UserID");

    if (userID == null) {
      this.router.navigateByUrl('login');
    }

  }

}

