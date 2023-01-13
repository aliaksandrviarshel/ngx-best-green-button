import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBestGreenButtonComponent } from './ngx-best-green-button.component';

describe('NgxBestGreenButtonComponent', () => {
  let component: NgxBestGreenButtonComponent;
  let fixture: ComponentFixture<NgxBestGreenButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBestGreenButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBestGreenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
