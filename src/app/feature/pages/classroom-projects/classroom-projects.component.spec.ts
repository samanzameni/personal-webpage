import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomProjectsComponent } from './classroom-projects.component';

describe('ClassroomProjectsComponent', () => {
  let component: ClassroomProjectsComponent;
  let fixture: ComponentFixture<ClassroomProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassroomProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassroomProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
