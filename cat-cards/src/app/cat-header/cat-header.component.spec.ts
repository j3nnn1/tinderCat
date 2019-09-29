import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatHeaderComponent } from './cat-header.component';

describe('CatHeaderComponent', () => {
  let component: CatHeaderComponent;
  let fixture: ComponentFixture<CatHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
