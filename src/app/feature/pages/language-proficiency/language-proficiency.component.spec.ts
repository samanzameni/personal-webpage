import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageProficiencyComponent } from './language-proficiency.component';

describe('LanguageProficiencyComponent', () => {
  let component: LanguageProficiencyComponent;
  let fixture: ComponentFixture<LanguageProficiencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageProficiencyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LanguageProficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
