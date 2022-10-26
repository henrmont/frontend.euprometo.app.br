import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminNewPostComponent } from './view-admin-new-post.component';

describe('ViewAdminNewPostComponent', () => {
  let component: ViewAdminNewPostComponent;
  let fixture: ComponentFixture<ViewAdminNewPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdminNewPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdminNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
