import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticianDeleteBoxComponent } from './politician-delete-box.component';

describe('PoliticianDeleteBoxComponent', () => {
  let component: PoliticianDeleteBoxComponent;
  let fixture: ComponentFixture<PoliticianDeleteBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticianDeleteBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticianDeleteBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
