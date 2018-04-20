import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingcartComponent } from './shopingcart.component';

describe('ShopingcartComponent', () => {
  let component: ShopingcartComponent;
  let fixture: ComponentFixture<ShopingcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
