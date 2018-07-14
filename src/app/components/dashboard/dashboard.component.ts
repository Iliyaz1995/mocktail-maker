import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(200)
      ])
    ])
  ]
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
