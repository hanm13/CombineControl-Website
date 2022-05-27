import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCombineSectionComponent } from './player-combine-section.component';

describe('PlayerCombineSectionComponent', () => {
  let component: PlayerCombineSectionComponent;
  let fixture: ComponentFixture<PlayerCombineSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerCombineSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCombineSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
