import { ComponentsModule } from './../components/components.module';
import { MaterialModule } from './../material.module';
import { LeagueCreatorComponent } from './league-creator.component';
import { TeamComponent } from './components/team/team.component';
import { NgModule } from '@angular/core';
import { TeamStatsComponent } from './components/team-stats/team-stats.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerGroupComponent } from './components/player-group/player-group.component';
import { PlayerListHeaderComponent } from './components/player-list-header/player-list-header.component';
import { SortOptionsComponent } from './components/sort-options/sort-options.component';
import { TeamTitleComponent } from './components/team-title/team-title.component';
import { CommonModule } from '../common.module';

@NgModule({
  declarations: [
    LeagueCreatorComponent,
    TeamComponent,
    TeamStatsComponent,
    PlayerListComponent,
    PlayerGroupComponent,
    PlayerListHeaderComponent,
    SortOptionsComponent,
    TeamTitleComponent
  ],
  imports: [
    MaterialModule,
    ComponentsModule,
    CommonModule,
  ],
  exports: [
    LeagueCreatorComponent,
    TeamComponent,
    TeamStatsComponent,
    PlayerListComponent,
    PlayerGroupComponent,
    PlayerListHeaderComponent,
    SortOptionsComponent
  ],
  providers: [],
  bootstrap: []
})
export class LeagueCreatorModule { }
