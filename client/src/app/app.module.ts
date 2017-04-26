import {NgModule}               from '@angular/core';
import {BrowserModule}          from '@angular/platform-browser';
import {FormsModule}            from '@angular/forms';
import {HttpModule}             from '@angular/http';
import {RouterModule, Routes}   from '@angular/router';

import {AppComponent}       from './app.component';
import {GodListComponent}   from './gods/god-list/god-list.component';
import {GodComponent}       from './gods/god/god.component';
import {GodService}         from './gods/shared/god.service';

// Application routes. Stored here for simplicity
const routes: Routes = [
    {path: 'god/:id', component: GodComponent},
    {path: '**', redirectTo: 'god/1', pathMatch: 'full'}
];

/**
 * @class AppModule
 * @description Application main module that defines all the components required for this module to work.
 */
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
    ],
    declarations: [
        AppComponent,
        GodListComponent,
        GodComponent,
    ],
    providers: [
        GodService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}