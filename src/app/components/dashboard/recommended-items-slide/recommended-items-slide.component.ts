import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recommended-items-slide',
  templateUrl: './recommended-items-slide.component.html',
  styleUrls: ['./recommended-items-slide.component.less']
})
export class RecommendedItemsSlideComponent implements OnInit {

  constructor() { }
  slideVisiblity:boolean = false;
  @Output() recommendedSlideToGlass = new EventEmitter();
  showSlide(){
    this.slideVisiblity = true;
    // console.log('clicked');
    
  }
  optionsChange($event){
    this.recommendedSlideToGlass.emit($event)
  }
  ngOnInit() {
  }

}
