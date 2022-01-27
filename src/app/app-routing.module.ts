import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameFeedComponent } from './game-feed/game-feed.component';

const routes: Routes = [
{ path: '',  component: GameFeedComponent },
{ path: 'gameFeed',  component: GameFeedComponent },
{ path:  'jackPot',  component: GameFeedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
