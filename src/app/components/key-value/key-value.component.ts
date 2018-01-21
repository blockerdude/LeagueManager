import { KeyValue } from './../../interfaces/keyValue';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lmc-key-value',
  templateUrl: './key-value.component.html',
  styleUrls: ['./key-value.component.scss']
})
export class KeyValueComponent {

  @Input() keyValue: KeyValue;
}
