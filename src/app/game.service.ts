/**
 * Created by erin.benderoff on 14/09/17.
 */
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Game} from './game';

@Injectable()
export class GameService {
    private apiUrl = 'http://localhost:1112/games';
    private headers = new Headers({
        'Content-Type': 'application/json'
    });
    private params = new URLSearchParams();

    constructor(private http: Http) {
    }

    getResult(play: string, type: string): Promise<Game> {
        this.params.set('play', play);
        this.params.set('type', type);
        return this.http
            .get(this.apiUrl, {headers: this.headers, params: this.params})
            .toPromise()
            .then(response => response.json() as Game)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    // Jonathan's code
    // private gameUrl = 'http://localhost:8080/(ENTER LINK HERE)';
    // getGame(currentGame: Game): Promise<Game> {
    //     const url = `${this.gameUrl}/${currentGame.playerPlay}`
    //     return this.http.get(url)
    //         .toPromise()
    //         .then(response => response.json()  as Game)
    //         .catch(this.handleError);
    // }
}
