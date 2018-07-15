import { Component, OnInit, Input, OnChanges, Output, EventEmitter, KeyValueDiffer, KeyValueDiffers, SimpleChange, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';
import { Recipe } from "../recipe.interface";


@Component({
  selector: 'app-glass',
  templateUrl: './glass.component.html',
  styleUrls: ['./glass.component.less'],
  animations: [
    trigger('fadeIn', [
      state('void', style({opacity: 0})),
      transition(':enter, :leave', [
        animate(500)
      ])
    ])
  ]
})
export class GlassComponent implements OnInit, OnChanges {
  
  constructor(private differs: KeyValueDiffers) { 
  }
  
  @Output() resetOptionsToRecipe = new EventEmitter();
  @Output() preLoader = new EventEmitter();
  @Input() selectedOptions: Recipe;
  @ViewChild('undoBtn') undoBtn: ElementRef;
  @ViewChild('redoBtn') redoBtn: ElementRef;
  
  

  private resetOptions = {
    juice: '',
    syrup: [],
    garnish: '',
    topOn: '',
    straw: '',
    iceCube: 0
  };
  undoDisabled: boolean = true;
  redoDisabled: boolean = true;
  completeDisabled: boolean = true;
  optionsHistory= [];
  recordHistory = true;

  optionsDiffer: KeyValueDiffer<string, any>


  
reset(){
  this.resetOptions = {
    juice: '',
    syrup: [],
    garnish: '',
    topOn: '',
    straw: '',
    iceCube: 0
  }
  if (this.selectedOptions !== undefined) {
    this.resetOptionsToRecipe.emit(this.resetOptions)
    // console.log(this.resetOptions);
    this.optionsHistory = [];
    
  }
  this.optionsHistory = [];
  this.index = 1;
  
}

index:number = 1;
stopHistory() {
    this.recordHistory = true;
}
undo(){
    this.undoBtn.nativeElement.focus();
    this.recordHistory = false;
    this.index++
    this.resetOptionsToRecipe.emit(JSON.parse(this.optionsHistory[this.optionsHistory.length - this.index]))
}

redo(){
  this.redoBtn.nativeElement.focus();
  this.recordHistory = false;
  this.index--
  this.resetOptionsToRecipe.emit(JSON.parse(this.optionsHistory[this.optionsHistory.length - this.index]))
}



loadingFinished(){
  this.preLoader.emit(false)
}

buttonsDisable(){
  var resetTringValue = {
    juice: '',
    syrup: [],
    garnish: '',
    topOn: '',
    straw: '',
    iceCube: 0
  }
  
  if (this.index >= this.optionsHistory.length) {
    this.undoDisabled = true;
  } else {
    this.undoDisabled = false;
  }

  if (this.index <= 1 || JSON.stringify(this.selectedOptions) == this.optionsHistory[this.optionsHistory.length - 1]) {
    this.redoDisabled = true
  } else {
    this.redoDisabled = false;
  }

  if (this.selectedOptions == resetTringValue) {
    this.completeDisabled = true
  } else {
    this.completeDisabled = false
  }
}

checkingForChanges(){
  var resetTringValue = {
    juice: '',
    syrup: [],
    garnish: '',
    topOn: '',
    straw: '',
    iceCube: 0
  }

  if (this.selectedOptions !== undefined) {
    const changes = this.optionsDiffer.diff(this.selectedOptions);
    
    if ((changes && this.recordHistory) && (JSON.stringify(this.selectedOptions) !== JSON.stringify(resetTringValue) && JSON.stringify(this.selectedOptions) !== this.optionsHistory[this.optionsHistory.length-1])) {
      this.optionsHistory.push(JSON.stringify(this.selectedOptions))
      this.preLoader.emit(true)
    }

    this.buttonsDisable()
  }
}

  ngOnInit() {
  }
  
  
  ngOnChanges(changes){
    if (this.selectedOptions !== undefined) {
      this.optionsDiffer = this.differs.find(this.selectedOptions).create();
    }
  }
  
  ngDoCheck(): void {
    this.checkingForChanges()
    console.log(this.index);
  }
}
