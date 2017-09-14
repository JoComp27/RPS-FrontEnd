import {Component} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';
import {GameService} from "./game.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    myData: Array<any>;
    color = 'primary';
    mode = 'determinate';
    value = 50;
    bufferValue = 75;

    playerPlay: string;
    opponentPlay: string;
    gameState: string;

    // tiles: Tile[] = [
    //     {text: 'Rock', cols: 2, rows: 1, color: 'red'},
    //     {text: 'Paper', cols: 2, rows: 1, color: 'grey'},
    //     {text: 'Scissors', cols: 2, rows: 1, color: 'royalblue'},
    //    // {text: 'Start', cols: 6, rows: 1, color: 'lightblue'}
    // ];

    constructor(private http: Http, private gameService: GameService) {


        this.http.get('https://jsonplaceholder.typicode.com/photos')
            .map(response => response.json())
            .subscribe(res => this.myData = res);

    }

    foo(tile: Tile): void {
        console.log(tile.text);
    }

    getGameResult(play: string) {
        this.gameService.getResult(play)
            .then(game => {
                this.gameState = game.gameState;
                this.playerPlay = game.playerPlay;
                this.opponentPlay = game.opponentPlay;
            });
    }

}

interface Tile {
    text: string;
    cols: number;
    rows: number;
    color: string;
}
