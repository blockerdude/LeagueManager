import { KeyValue } from './../../../interfaces/keyValue';
import { KeyValueComponent } from './../../../components/key-value/key-value.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lmc-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css']
})
export class TeamStatsComponent implements OnInit {

  @Input() teamStats: KeyValue[];

  ngOnInit() {
  }

}
