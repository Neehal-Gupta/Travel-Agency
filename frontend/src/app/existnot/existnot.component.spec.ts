import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistnotComponent } from './existnot.component';

describe('ExistnotComponent', () => {
  let component: ExistnotComponent;
  let fixture: ComponentFixture<ExistnotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistnotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistnotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
