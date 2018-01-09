import { League } from './../interfaces/league';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lmc-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent {

  @Input() year: string;
  @Input() leagues: League[];

}
