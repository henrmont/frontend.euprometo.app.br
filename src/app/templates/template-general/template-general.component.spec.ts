import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateGeneralComponent } from './template-general.component';

describe('TemplateGeneralComponent', () => {
  let component: TemplateGeneralComponent;
  let fixture: ComponentFixture<TemplateGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
