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

    foo(tile: Tile): void {
        console.log(tile.text);
    }

}

interface Tile {
    text: string;
    cols: number;
    rows: number;
    color: string;
}
