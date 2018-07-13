import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended-items',
  templateUrl: './recommended-items.component.html',
  styleUrls: ['./recommended-items.component.less']
})
export class RecommendedItemsComponent implements OnInit {

  constructor() { }

  index;

  closeAllTabs() {
    this.index = -1
  }
  onTabOpen(event) {
    this.index = event.index
  }
  ngOnInit() {
  }

}
