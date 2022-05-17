import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  selectSubFlag: any = false;
  selectIntSub: any = false;
  openDrawerFlag : any = false;
  subjectArr : any = [
    {CML_TITLE:"Marathi",CML_IMAGE:'assets/images/Group.svg'},
    {CML_TITLE:"English",CML_IMAGE:'assets/images/Group.svg'},
    {CML_TITLE:"Math Part 1",CML_IMAGE:'assets/images/Group.svg'},
    {CML_TITLE:"Math Part 2",CML_IMAGE:'assets/images/Group.svg'},
    {CML_TITLE:"Hindi",CML_IMAGE:'assets/images/Group.svg'},
    {CML_TITLE:"Geography",CML_IMAGE:'assets/images/Group.svg'},
    {CML_TITLE:"Chemistry",CML_IMAGE:'assets/images/Group.svg'},
    {CML_TITLE:"Marathi",CML_IMAGE:'assets/images/Group.svg'},
    {CML_TITLE:"English",CML_IMAGE:'assets/images/Group.svg'},
    {CML_TITLE:"Math Part 1",CML_IMAGE:'assets/images/Group.svg'},
    {CML_TITLE:"Math Part 2",CML_IMAGE:'assets/images/Group.svg'},
    {CML_TITLE:"Geography",CML_IMAGE:'assets/images/Group.svg'},
    {CML_TITLE:"Chemistry",CML_IMAGE:'assets/images/Group.svg'},
  ];
  continueLearnArr: any = [
    {CML_TITLE:'CHEMISTRY',CML_IMAGE:'assets/images/learn.png',CML_DESC:'Balancing the chemical reaction'},
    {CML_TITLE:'MATHS',CML_IMAGE:'assets/images/learn.png',CML_DESC:'Understanding pythagoras'},
    {CML_TITLE:'ENGLISH',CML_IMAGE:'assets/images/learn.png',CML_DESC:'Acronyms & Synonyms'},
  ]
  swadhyayArr: any = [
    {CML_TITLE:'Take a test',CML_IMAGE:'assets/images/bgOne.svg',CML_DESC:'PDF for self-learning and assessment',CML_COLOR:'#3cd83c'},
    {CML_TITLE:'Swadhyay (PDF)',CML_IMAGE:'assets/images/bg.svg',CML_DESC:'PDF for self-learning and assessment',CML_COLOR:'#5d5dce'},
    {CML_TITLE:'Audio Lesson',CML_IMAGE:'assets/images/bgTwo.svg',CML_DESC:'Listen to audio lesson on the go',CML_COLOR:'#f17070'},
  ];
  fiberArr: any = [
    {CML_TITLE:'What are fibers made of?',CML_IMAGE:'assets/images/fabric.jpeg'},
    {CML_TITLE:'Cotton fabrics',CML_IMAGE:'assets/images/fabric.jpeg'},
    {CML_TITLE:'Revolution',CML_IMAGE:'assets/images/fabric.jpeg'},
    {CML_TITLE:'Cotton fabrics',CML_IMAGE:'assets/images/fabric.jpeg'},
    {CML_TITLE:'Cotton fabrics',CML_IMAGE:'assets/images/fabric.jpeg'},
  ];
  waterArr: any = [
    {CML_TITLE:'How many cycles are in the water cycle?',CML_IMAGE:'assets/images/water.jpeg'},
    {CML_TITLE:'What is the second step of the water cycle?',CML_IMAGE:'assets/images/water.jpeg'},
    {CML_TITLE:'How many cycles are in the water cycle?',CML_IMAGE:'assets/images/water.jpeg'},
    {CML_TITLE:'How many cycles are in the water cycle?',CML_IMAGE:'assets/images/water.jpeg'},
  ]
  ngOnInit() {
  }
  selectSubject(){
    this.selectSubFlag = true;
  }
  backSelectSubject(){
    this.selectSubFlag = false;
  }
  selectIntSubFunc(){
    this.selectIntSub = true;
  }
  backIntSub(){
    this.selectIntSub = false;
  }
  openCloseFunc(){
    this.openDrawerFlag = true;
  }
  closeFunc(){
    this.openDrawerFlag = false;
  }

}
