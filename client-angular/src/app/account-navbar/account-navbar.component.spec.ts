import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNavbarComponent } from './account-navbar.component';

describe('AccountNavbarComponent', () => {
  let component: AccountNavbarComponent;
  let fixture: ComponentFixture<AccountNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
