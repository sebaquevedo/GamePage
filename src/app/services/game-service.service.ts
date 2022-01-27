import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGameResult, IGame } from '../game-feed/game-feed.model';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

gamesUrl = 'http://stage.whgstage.com/front-end-test/games.php';

  constructor(private http: HttpClient) { }

getGames():Observable<IGame[]>{
  return this.http.get<IGame[]>(this.gamesUrl);
}

}
