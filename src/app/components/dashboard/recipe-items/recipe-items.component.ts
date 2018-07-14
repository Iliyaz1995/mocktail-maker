import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.less']
})
export class RecipeItemsComponent implements OnInit, OnChanges {

  constructor() { }
  @Output() selectedOptionsToGlass = new EventEmitter();
  @Input() resetOptionsFromGlass;

  selectedJuice:string;
  selectedSyrup: any[];
  selectedGarnish: string;
  selectedTopOn: string;
  selectedStraw: string;
  selectedIceCube: number;
  smallWindow: boolean = false;
  index;

  fruitJuices: any[] = [
    { label: "Strawberry", value: "strawberry" },
    { label: "Blueberry", value: "blueberry" },
    { label: "Orange", value: "orange" },
    { label: "Grape", value: "grape" },
    { label: "Raspberry", value: "raspberry" },
    { label: "Apple", value: "apple" },
    { label: "Watermelon", value: "watermelon" },
    { label: "Lychee", value: "lychee" },
    { label: "Mango", value: "mango" },
    { label: "Blue shoe", value: "blue" },
    { label: "Pineapple", value: "pineapple" },
  ];

  syrups: any[] = [
    { label: "Honey syrup", value: "honey" },
    { label: "Vanilla syrup", value: "vanilla" },
    { label: "Coconut syrup", value: "coconut" },
    { label: "Basil syrup", value: "basil" },
    { label: "Lime juice", value: "lime" },
    { label: "Sugar syrup", value: "sugar" },
    { label: "Ginger juice", value: "ginger" },
  ];

  garnishes: any[] = [
    { label: "Lemon slice", value: "lemon" },
    { label: "Strawberry slice", value: "strawberry" },
    { label: "Apple slice", value: "apple" },
  ];

  topOns: any[] = [
    { label: "Cherry", value: "cherry" },
    { label: "Mint", value: "mint" },
  ];

  straws: any[] = [
    { label: "Umbrella", value: "umbrella" },
    { label: "Straw", value: "straw" },
  ];

  iceCubes: any[] = [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
  ];


  selectedOptions = {
    juice: '',
    syrup: [],
    garnish: '',
    topOn: '',
    straw: '',
    iceCube: 0
  }


  optionsChange(option, model,event){
    if(model == undefined || model == '' || model == 0){
     console.log(event);
     
    }else{
      this.selectedOptions[option] = model;
      this.selectedOptionsToGlass.emit(this.selectedOptions);
      // console.log(model);
    }
    
  }

  syrupCheckBoxChange(checked){
    // console.log(checked);
  }
    
  resetInputs(){
    if (this.resetOptionsFromGlass !== undefined) {
      // console.log(this.resetOptions);
      this.selectedOptions = this.resetOptionsFromGlass;
      this.selectedOptionsToGlass.emit(this.selectedOptions);
      this.selectedJuice = this.resetOptionsFromGlass.juice;
      this.selectedSyrup = this.resetOptionsFromGlass.syrup;
      this.selectedGarnish = this.resetOptionsFromGlass.garnish;
      this.selectedTopOn = this.resetOptionsFromGlass.topOn;
      this.selectedStraw = this.resetOptionsFromGlass.straw;
      this.selectedIceCube = this.resetOptionsFromGlass.iceCube;
    }
  }

  closeAllTabs(){
   this.index = -1
  }
  onTabOpen(event) {
    this.index = event.index
  }

  ngOnInit() {
    
  }

  ngOnChanges(){
  this.resetInputs();
  }

}
