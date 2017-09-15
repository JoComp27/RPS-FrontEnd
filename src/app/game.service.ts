/**
 * Created by jonathan.cournoyer on 15/09/17.
 */

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Game} from './Game';


@Injectable()
export class GameService {

    private gameUrl = 'http://localhost:8080/(ENTER LINK HERE)';


    constructor(private http: Http) {
    }

    getGame(game: Game): Promise<Game> {
        const url = `${this.gameUrl}/${game.playerPlay}`
        return this.http.get(url)
            .toPromise()
            .then(response => response.json()  as Game)
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }


}
