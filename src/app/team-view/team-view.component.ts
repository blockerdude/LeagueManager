import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lmc-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.scss']
})
export class TeamViewComponent {

  @Input() teamName: string;

  teamTitle: string = 'Team';
}
