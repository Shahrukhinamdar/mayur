import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  menuArry : any = [{CML_TITLE:'Home',CML_IMAGE:'assets/images/home.svg'},{CML_TITLE:'Search',CML_IMAGE:'assets/images/search.svg'},{CML_TITLE:'Explore',CML_IMAGE:'assets/images/explore.svg'},{CML_TITLE:'Profile',CML_IMAGE:'assets/images/profile.svg'},]
  ngOnInit() {
  }

}
