import { Component, OnInit, OnDestroy} from '@angular/core';
import { IGame, IGameResult}  from './game-feed.model';
import { GameServiceService } from '../services/game-service.service';

@Component({
  selector: 'app-game-feed',
  templateUrl: './game-feed.component.html',
  styleUrls: ['./game-feed.component.scss']
})
export class GameFeedComponent implements OnInit {
  public GameDataSource :IGameResult[] =[];
  public originalDataSource :IGame[] = [];

  constructor(private gameService :GameServiceService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe( data => {this.originalDataSource = data});
  }

}
