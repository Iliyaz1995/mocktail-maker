import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recommended-items',
  templateUrl: './recommended-items.component.html',
  styleUrls: ['./recommended-items.component.less']
})
export class RecommendedItemsComponent implements OnInit {

  constructor() { }

  index;
  activeIndex;
  @Output() RecommendedOptionsToGlass = new EventEmitter();

  recommendedItems = [
    { juice: 'watermelon', syrup: ['honey', 'lime'], garnish: 'lemon', topOn: 'cherry', straw: 'umbrella', iceCube: 3 },
    { juice: 'orange', syrup: ['honey', 'lime'], garnish: 'strawberry', topOn: 'mint', straw: 'umbrella', iceCube: 2 },
    { juice: 'blueberry', syrup: ['basil', 'vanilla'], garnish: 'apple', topOn: 'cherry', straw: 'straw', iceCube: 4 },
    { juice: 'strawberry', syrup: ['honey', 'lime'], garnish: 'lemon', topOn: 'mint', straw: 'umbrella', iceCube: 1 }, 
    { juice: 'pineapple', syrup: ['honey', 'lime'], garnish: 'strawberry', topOn: 'cherry', straw: 'straw', iceCube: 2 },
    { juice: 'mango', syrup: ['ginger', 'lime'], garnish: 'apple', topOn: 'mint', straw: 'straw', iceCube: 1 }
      ]

  closeAllTabs() {
    this.index = -1
  }
  onTabOpen(event) {
    this.index = event.index
    this.activeIndex = event.index;
  }

  select(i){
    console.log(this.recommendedItems[i]);
    this.RecommendedOptionsToGlass.emit(this.recommendedItems[i])
    this.index = -1;
  }
  ngOnInit() {
  }

}
