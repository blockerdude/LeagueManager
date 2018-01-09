import { League } from './interfaces/league';
import { Component } from '@angular/core';

@Component({
  selector: 'lmc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  playerContactInfo: string = 'player contact info'
  playerName: string = 'TestName';
  teamName: string = 'Panthers';
  year: string = '2017';
  leagues: League[] = [{
    leagueName: 'Monday-Wednesday CoEd',
    leagueDescription: 'Its a description, what else do you want?'
  },
  {
    leagueName: 'Tuesday-Thursday Mens',
    leagueDescription: 'Will this even be needed?'
  }];
}
