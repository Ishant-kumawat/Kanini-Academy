import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaniniLoginSignupComponent } from './kanini-login-signup.component';

describe('KaniniLoginSignupComponent', () => {
  let component: KaniniLoginSignupComponent;
  let fixture: ComponentFixture<KaniniLoginSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KaniniLoginSignupComponent]
    });
    fixture = TestBed.createComponent(KaniniLoginSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
