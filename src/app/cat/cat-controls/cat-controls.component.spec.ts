import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatControlsComponent } from './cat-controls.component';

describe('CatControlsComponent', () => {
  let component: CatControlsComponent;
  let fixture: ComponentFixture<CatControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
