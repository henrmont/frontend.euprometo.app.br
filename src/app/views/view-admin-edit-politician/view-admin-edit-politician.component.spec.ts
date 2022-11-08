import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminEditPoliticianComponent } from './view-admin-edit-politician.component';

describe('ViewAdminEditPoliticianComponent', () => {
  let component: ViewAdminEditPoliticianComponent;
  let fixture: ComponentFixture<ViewAdminEditPoliticianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdminEditPoliticianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAdminEditPoliticianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
