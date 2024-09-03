import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentParentComponent } from './content-parent.component';

describe('ContentParentComponent', () => {
  let component: ContentParentComponent;
  let fixture: ComponentFixture<ContentParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
