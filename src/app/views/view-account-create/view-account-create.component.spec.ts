import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccountCreateComponent } from './view-account-create.component';

describe('ViewAccountCreateComponent', () => {
  let component: ViewAccountCreateComponent;
  let fixture: ComponentFixture<ViewAccountCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAccountCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccountCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
