import {Component} from '@angular/core';

@Component({
    selector: 'app-line-graph',
    templateUrl:'./line-graph.component.html',
    styleUrls:['./line-graph.component.css']
})

export class LineGraphComponent {
    data: any[] = [

        {
            "name": "Score",
            "series": [
            ]
        }];

    view: any[] = [1100, 600];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showXAxisLabel = true;
    xAxisLabel = 'Number of Plays';
    showYAxisLabel = true;
    yAxisLabel = 'Score';

    colorScheme = {
        domain: ['#1e2fa4']
    };

    // line, area
    autoScale = true;


    add(val: number) {
        this.data[0].series.push({"name": this.data[0].series.length + 1, "value": val});
        this.data = [...this.data];
    }

    clear(val: number) {
        this.data[0].series = [];
        this.data = [...this.data];
    }

}
