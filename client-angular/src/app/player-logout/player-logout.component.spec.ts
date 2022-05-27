import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLogoutComponent } from './player-logout.component';

describe('PlayerLogoutComponent', () => {
  let component: PlayerLogoutComponent;
  let fixture: ComponentFixture<PlayerLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
