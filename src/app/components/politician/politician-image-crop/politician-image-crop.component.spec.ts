import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticianImageCropComponent } from './politician-image-crop.component';

describe('PoliticianImageCropComponent', () => {
  let component: PoliticianImageCropComponent;
  let fixture: ComponentFixture<PoliticianImageCropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticianImageCropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticianImageCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
