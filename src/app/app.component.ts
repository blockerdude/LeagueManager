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
}
