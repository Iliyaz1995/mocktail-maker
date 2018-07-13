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
  optionsHistoryRedo = [];
  optionsHistoryUndo= [];
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
    this.optionsHistoryUndo = [];
    this.optionsHistoryRedo = [];
    
  }
  this.optionsHistoryUndo = [];
  this.index = 1;
  
}

stopHistory() {
    this.recordHistory = true;
}
index:number = 1;
  undo(){
    this.undoBtn.nativeElement.focus();
    this.recordHistory = false;
    this.index++
    console.log(this.optionsHistoryUndo);
    this.resetOptionsToRecipe.emit(JSON.parse(this.optionsHistoryUndo[this.optionsHistoryUndo.length - this.index]))
    console.log(this.index);
}

redo(){
  this.redoBtn.nativeElement.focus();
  this.recordHistory = false;
  this.index--
  console.log(this.optionsHistoryUndo);
  this.resetOptionsToRecipe.emit(JSON.parse(this.optionsHistoryUndo[this.optionsHistoryUndo.length - this.index]))
  console.log(this.index);
  
  
}



  ngOnInit() {

  }


  ngOnChanges(){
    if (this.selectedOptions !== undefined) {
      this.optionsDiffer = this.differs.find(this.selectedOptions).create();
    }
    
  }
  
  ngDoCheck(): void {
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

    if ((changes && this.recordHistory) && JSON.stringify(this.selectedOptions) !== JSON.stringify(resetTringValue)) {
       this.optionsHistoryUndo.push(JSON.stringify(this.selectedOptions))
    }
      
      if (this.index >= this.optionsHistoryUndo.length){
         this.undoDisabled = true;
      }else{
        this.undoDisabled = false;
      }

      if (this.index <= 1){
        this.redoDisabled = true
      }else{
        this.redoDisabled = false;
      }

   }
   
  
  }
}
