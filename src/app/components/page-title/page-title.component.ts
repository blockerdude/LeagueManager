import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lmc-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {

  @Input() title: string;
  @Input() value: string;
}
