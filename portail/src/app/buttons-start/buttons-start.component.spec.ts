import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsStartComponent } from './buttons-start.component';

describe('ButtonsStartComponent', () => {
  let component: ButtonsStartComponent;
  let fixture: ComponentFixture<ButtonsStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsStartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
