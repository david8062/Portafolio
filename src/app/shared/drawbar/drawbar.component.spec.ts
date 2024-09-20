import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawbarComponent } from './drawbar.component';

describe('DrawbarComponent', () => {
  let component: DrawbarComponent;
  let fixture: ComponentFixture<DrawbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrawbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
