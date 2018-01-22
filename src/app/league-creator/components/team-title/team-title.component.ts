import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lmc-team-title',
  templateUrl: './team-title.component.html',
  styleUrls: ['./team-title.component.css']
})
export class TeamTitleComponent implements OnInit {

  @Input() teamName: string;
  @Output() teamNameUpdated: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    console.log('can log');
  }

  updateTeamName = (newName: string): void => {
    this.teamNameUpdated.emit(newName);
  }

}
