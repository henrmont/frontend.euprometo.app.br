import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostViewFullComponent } from './post-view-full.component';

describe('PostViewFullComponent', () => {
  let component: PostViewFullComponent;
  let fixture: ComponentFixture<PostViewFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostViewFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostViewFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
