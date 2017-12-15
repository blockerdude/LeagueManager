import { ComponentsModule } from './components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
