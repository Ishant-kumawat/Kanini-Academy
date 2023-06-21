import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillQuizComponent } from './skill-quiz.component';

describe('SkillQuizComponent', () => {
  let component: SkillQuizComponent;
  let fixture: ComponentFixture<SkillQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillQuizComponent]
    });
    fixture = TestBed.createComponent(SkillQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
