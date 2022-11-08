import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticianStatusBoxComponent } from './politician-status-box.component';

describe('PoliticianStatusBoxComponent', () => {
  let component: PoliticianStatusBoxComponent;
  let fixture: ComponentFixture<PoliticianStatusBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticianStatusBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticianStatusBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
