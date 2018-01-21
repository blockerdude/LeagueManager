import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueCreatorComponent } from './league-creator.component';

describe('LeagueCreatorComponent', () => {
  let component: LeagueCreatorComponent;
  let fixture: ComponentFixture<LeagueCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
