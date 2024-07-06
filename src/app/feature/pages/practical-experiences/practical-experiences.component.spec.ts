import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalExperiencesComponent } from './practical-experiences.component';

describe('PracticalExperiencesComponent', () => {
  let component: PracticalExperiencesComponent;
  let fixture: ComponentFixture<PracticalExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticalExperiencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticalExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
