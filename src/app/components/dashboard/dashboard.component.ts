import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }
  selectedOptions:string;
  resetOptionsFromGlass;
  public overlayDisplay;

  optionsChange($event){
    this.selectedOptions = $event;
  } 

  optionsReset($event){
    this.resetOptionsFromGlass = $event;
  }
  preLoader($event){
    this.overlayDisplay = $event;
    // console.log($event);
    this.cd.detectChanges();
  }
}
