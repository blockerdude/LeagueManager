import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lmc-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  @Input() statOptions: string[];
  @Input() players: Player[];
  @Input() nameText: string;
  @Input() totalText: string;
  @Output() statOptionChanged: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }

}
