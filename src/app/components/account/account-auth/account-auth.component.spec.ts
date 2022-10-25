import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAuthComponent } from './account-auth.component';

describe('AccountAuthComponent', () => {
  let component: AccountAuthComponent;
  let fixture: ComponentFixture<AccountAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
