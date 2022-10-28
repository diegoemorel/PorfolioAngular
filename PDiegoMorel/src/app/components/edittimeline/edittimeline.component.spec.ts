import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittimelineComponent } from './edittimeline.component';

describe('EdittimelineComponent', () => {
  let component: EdittimelineComponent;
  let fixture: ComponentFixture<EdittimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
