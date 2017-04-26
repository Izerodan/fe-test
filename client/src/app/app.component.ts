import {Component} from '@angular/core';

/**
 * @class AppComponent
 * @description Application component that establishes the root of the application's component hierarchy.
 */
@Component({
    selector: 'my-app',
    template: `
    <div class="container">
        <h1>Mythological Gods</h1>
        <div class="row">
            <div class="col-1-5">
                <god-list></god-list>
            </div>
            <div class="col-4-5">
                <router-outlet></router-outlet>
            </div>
        </div>
    </div>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {}