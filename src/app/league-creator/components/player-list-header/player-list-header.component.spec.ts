import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListHeaderComponent } from './player-list-header.component';

describe('PlayerListHeaderComponent', () => {
  let component: PlayerListHeaderComponent;
  let fixture: ComponentFixture<PlayerListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
