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
    wins = 0;
    losses = 0;
    draws = 0;

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

    getGameResult(play: string, type: string) {
        this.gameService.getResult(play, type)
            .then(game => {
                this.currentGame.gameState = game.gameState;
                this.currentGame.playerPlay = game.playerPlay;
                this.currentGame.opponentPlay = game.opponentPlay;
                this.count = this.count + 1;
                game.id = this.count; // assign game an id on frontend
                this.updateScore(game.gameState);
                this.games.push(game);
            });
    }

    reset() {
        this.games = [];
        this.count = 0;
        this.wins = 0;
        this.losses = 0;
        this.draws = 0;
    }

    setGameType(gameType: string) {
        this.currentGame.gameType = gameType;
    }

    updateScore(gameState: string) {
        switch (gameState) {
            case 'WIN':
                this.wins = this.wins + 1;
                break;
            case 'LOSS':
                this.losses = this.losses + 1;
                break;
            case 'DRAW':
                this.draws = this.draws + 1;
                break;
        }
    }

}
