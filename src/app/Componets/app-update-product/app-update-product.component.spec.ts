import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUpdateProductComponent } from './app-update-product.component';

describe('AppUpdateProductComponent', () => {
  let component: AppUpdateProductComponent;
  let fixture: ComponentFixture<AppUpdateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppUpdateProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
