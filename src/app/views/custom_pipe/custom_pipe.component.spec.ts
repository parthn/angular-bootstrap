import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipeComponent } from './custom_pipe.component';

describe('CustomPipeComponent', () => {
  let component: CustomPipeComponent;
  let fixture: ComponentFixture<CustomPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
