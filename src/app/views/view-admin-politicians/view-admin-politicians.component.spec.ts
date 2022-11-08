import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminPoliticiansComponent } from './view-admin-politicians.component';

describe('ViewAdminPoliticiansComponent', () => {
  let component: ViewAdminPoliticiansComponent;
  let fixture: ComponentFixture<ViewAdminPoliticiansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdminPoliticiansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAdminPoliticiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
