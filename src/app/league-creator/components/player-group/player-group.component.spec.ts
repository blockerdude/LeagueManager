import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerGroupComponent } from './player-group.component';

describe('PlayerGroupComponent', () => {
  let component: PlayerGroupComponent;
  let fixture: ComponentFixture<PlayerGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
