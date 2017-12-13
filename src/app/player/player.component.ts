import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lmc-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  @Input() playerName: string;
  playerTitle: string = 'Player';
}
