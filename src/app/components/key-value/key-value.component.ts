import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lmc-key-value',
  templateUrl: './key-value.component.html',
  styleUrls: ['./key-value.component.scss']
})
export class KeyValueComponent {

  @Input() title: string;
  @Input() value: string;
}
