import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedItemsSlideComponent } from './recommended-items-slide.component';

describe('RecommendedItemsSlideComponent', () => {
  let component: RecommendedItemsSlideComponent;
  let fixture: ComponentFixture<RecommendedItemsSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedItemsSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedItemsSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
