import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lmc-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  @Input() teamName: string;

  teamTitle: string = 'Team';
}
