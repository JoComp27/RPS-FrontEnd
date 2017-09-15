import {Component} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';
import {GameService} from "./game.service";
import {Game} from "./game";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    myData: Array<any>;
    // color = 'primary';
    // mode = 'determinate';
    // value = 50;
    // bufferValue = 75;


    games: Game[] = [];
    currentGame: Game;
    count = 0;

    // tiles: Tile[] = [
    //     {text: 'Rock', cols: 2, rows: 1, color: 'red'},
    //     {text: 'Paper', cols: 2, rows: 1, color: 'grey'},
    //     {text: 'Scissors', cols: 2, rows: 1, color: 'royalblue'},
    //    // {text: 'Start', cols: 6, rows: 1, color: 'lightblue'}
    // ];

    constructor(private http: Http, private gameService: GameService) {
        this.currentGame = new Game();
        this.currentGame.gameType = 'RANDOM'; // currentGame type defaults to random
        this.http.get('https://jsonplaceholder.typicode.com/photos')
            .map(response => response.json())
            .subscribe(res => this.myData = res);
    }

    // to do: pass in the game type when jonathan finishes back end
    getGameResult(play: string) {
        this.gameService.getResult(play)
            .then(game => {
                this.currentGame.gameState = game.gameState;
                this.currentGame.playerPlay = game.playerPlay;
                this.currentGame.opponentPlay = game.opponentPlay;
                this.count = this.count + 1;
                game.id = this.count; // assign game an id on frontend
                this.games.push(game);
            });
    }

    reset() {
        this.games = [];
        this.count = 0;
    }

    setGameType(gameType: string) {
        this.currentGame.gameType = gameType;
    }

}
