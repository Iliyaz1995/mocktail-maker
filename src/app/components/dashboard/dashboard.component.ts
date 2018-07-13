import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectedOptions:string;
  resetOptionsFromGlass;

  optionsChange($event){
    this.selectedOptions = $event;
  } 

  optionsReset($event){
    this.resetOptionsFromGlass = $event;
  }

}
