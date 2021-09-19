import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  constructor(private router:Router, private menu: MenuController) { }
  ngOnInit() {}
  navigate(event:any,parameter:string){
    switch (parameter) {
      case "home": this.router.navigateByUrl('home'); break;
      case "myProfile": this.router.navigateByUrl('my-profile'); break;
      case "addNewQuestion": this.router.navigateByUrl('add-new-question'); break;
      case "myQuestions": this.router.navigateByUrl('my-questions'); break;
      case "myAnswers": this.router.navigateByUrl('my-answers'); break;
      case "myStats": this.router.navigateByUrl('my-stats'); break;
      case "toSearch": this.router.navigateByUrl('to-search'); break;
    }
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  openEnd() {
    this.menu.open('end');
  }
  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  logout(){ 
    //localStorage.removeItem("UserID");
    localStorage.clear();
    this.router.navigateByUrl('login');
   }
}