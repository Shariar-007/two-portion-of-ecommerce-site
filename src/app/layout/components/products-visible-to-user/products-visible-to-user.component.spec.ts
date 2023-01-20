import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsVisibleToUserComponent } from './products-visible-to-user.component';

describe('ProductsVisibleToUserComponent', () => {
  let component: ProductsVisibleToUserComponent;
  let fixture: ComponentFixture<ProductsVisibleToUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsVisibleToUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsVisibleToUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
