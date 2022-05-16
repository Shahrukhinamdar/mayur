import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-login-and-signup',
  templateUrl: './login-and-signup.component.html',
  styleUrls: ['./login-and-signup.component.css']
})
export class LoginAndSignupComponent implements OnInit {
  pageOne:any = true;
  pageTwo:any = false;
  pageThree: any = false;
  @Output() callBack = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  gotoPageTwo(){
    this.pageOne = false;
    this.pageTwo = true;
  }
  backPageOne(){
    this.pageOne = true;
    this.pageTwo = false;
  }
  signIn(){
    this.pageOne = false;
    this.pageTwo = false;
    this.pageThree = true
  }
  backPageTwo(){
    this.pageTwo = true;
    this.pageThree = false;
    this.pageOne = false;
  }
  signInFunc(){
    this.callBack.emit();
  }

}
