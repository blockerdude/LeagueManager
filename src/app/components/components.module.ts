import { NgModule } from '@angular/core';
import { KeyValueComponent } from './key-value/key-value.component';
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  declarations: [
    KeyValueComponent,
    PageTitleComponent
  ],
  imports: [],
  providers: [],
  bootstrap: [],
  exports: [
    KeyValueComponent,
    PageTitleComponent
  ]
})
export class ComponentsModule { }
