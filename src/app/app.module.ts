import { MaterialModule } from './material.module';
import { LeagueCreatorModule } from './league-creator/league-creator.module';
import { TeamViewComponent } from './team-view/team-view.component';
import { ComponentsModule } from './components/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { YearComponent } from './year/year.component';
import { CommonModule } from './common.module';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TeamViewComponent,
    YearComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    LeagueCreatorModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
