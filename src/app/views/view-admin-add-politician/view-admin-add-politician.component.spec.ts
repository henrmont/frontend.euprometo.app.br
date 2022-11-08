import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminAddPoliticianComponent } from './view-admin-add-politician.component';

describe('ViewAdminAddPoliticianComponent', () => {
  let component: ViewAdminAddPoliticianComponent;
  let fixture: ComponentFixture<ViewAdminAddPoliticianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdminAddPoliticianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAdminAddPoliticianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
