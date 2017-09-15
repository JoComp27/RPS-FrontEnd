import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdGridListModule, MdButtonToggleModule, MdTableModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {GameService} from "./game.service";
import { LineGraphComponent } from './line-graph/line-graph.component';

@NgModule({
    declarations: [
        AppComponent,
        LineGraphComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdMenuModule,
        MdCardModule,
        MdToolbarModule,
        MdIconModule,
        MdGridListModule,
        MdButtonToggleModule,
        MdTableModule,
        NgxChartsModule
    ],
    providers: [GameService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
