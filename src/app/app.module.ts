import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule, MdButtonToggleModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {GameService} from './game.service';

@NgModule({
    declarations: [
        AppComponent
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
        MdButtonToggleModule
    ],
    providers: [GameService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
