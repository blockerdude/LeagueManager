import { KeyValue } from './../../../interfaces/keyValue';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lmc-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() teamName: string;
  @Input() teamStats: KeyValue[];
  @Input() statOptions: string[];

  name: string = 'Name';
  total: string = 'Total Points';

  ngOnInit() {
    this.teamName = 'test';
    this.teamStats = [
      {
        key: 'testkey1',
        value: 'testvalue1'
      },
      {
        key: 'testkey2',
        value: 'testvalue2'
      },
      {
        key: 'testkey3',
        value: 'testvalue3'
      }
    ]

    this.statOptions = [
      'Experience', 'Throwing', 'Athleticism', 'Days Missing'
    ]
  }

  updateTeamName = (teamName: string): void => {
    console.log(teamName);
  }

  updateStatOption = (statOption: string): void => {
    console.log(statOption);
  }
}
