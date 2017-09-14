import {Component} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';

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


    games: Game[] = [
        {playerPlay: "Rock", opponentPlay: "Paper", gameState: "Lose"},
        {playerPlay: "Rok", opponentPlay: "Paer", gameState: "Lose"},
        {playerPlay: "Rock", opponentPlay: "aper", gameState: "Lse"},
        {playerPlay: "Rok", opponentPlay: "Paper", gameState: "ose"}
    ];


    // tiles: Tile[] = [
    //     {text: 'Rock', cols: 2, rows: 1, color: 'red'},
    //     {text: 'Paper', cols: 2, rows: 1, color: 'grey'},
    //     {text: 'Scissors', cols: 2, rows: 1, color: 'royalblue'},
    //    // {text: 'Start', cols: 6, rows: 1, color: 'lightblue'}
    // ];

    constructor(private http: Http) {


        this.http.get('https://jsonplaceholder.typicode.com/photos')
            .map(response => response.json())
            .subscribe(res => this.myData = res);

    }

    foo() {
        this.games.push({playerPlay: "Rok", opponentPlay: "Paper", gameState: "ose"});
    }
}

export interface Game {
    playerPlay: string;
    opponentPlay: string;
    gameState: string;
}