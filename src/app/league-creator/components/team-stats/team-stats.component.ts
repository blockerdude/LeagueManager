import { KeyValue } from './../../../interfaces/keyValue';
import { KeyValueComponent } from './../../../components/key-value/key-value.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lmc-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css']
})
export class TeamStatsComponent implements OnInit {

  teamStats: KeyValue[];

  constructor() { }

  ngOnInit() {
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
  }

}
