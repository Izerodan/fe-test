import {Component, OnInit}    from '@angular/core';

import {God}                 from '../shared/god.model';
import {GodService}          from '../shared/god.service';

/**
 * @class GodListComponent
 * @description Component used to fill and manage a list of gods.
 */
@Component({
    selector: 'god-list',
    templateUrl: './god-list.component.html',
    styleUrls: ['./god-list.component.css']
})
export class GodListComponent implements OnInit {
    gods: God[];
    error: string;

    /**
     * @constructor
     * @param {GodService} godService the {@link GodService} used to obtain the list of gods
     */
    constructor(private godService: GodService) {}

    /**
     * @method ngOnInit
     * @memberOf GodListComponent
     * @description Loads all the gods when this component is loaded
     */
    ngOnInit(): void {
        this.getGods();
    }

    /**
     * @method getGods
     * @memberOf GodListComponent
     * @description Returns the list of all the gods from the current server
     */
    getGods(): void {
        this.godService.getGods()
            .then(
                gods => this.gods = gods,
                error =>
                this.error = `There was an error while attempting to load the data.
                Maybe the server is not initialized at port 4000?`
            );
    }
}
