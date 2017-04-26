import {Component, OnInit}              from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {God}               from '../shared/god.model';
import {GodService}        from '../shared/god.service';

/**
 * @class GodComponent
 * @description Component used to obtain a single god and manage its view.
 */
@Component({
    selector: 'god',
    templateUrl: './god.component.html',
    styleUrls: ['./god.component.css']
})
export class GodComponent implements OnInit {
    god: God;
    error: string;

    /**
     * @constructor
     * @param {GodService} godService   the {@link GodService} used to obtain the god object/s from the server
     * @param {ActivatedRoute} route    the {@link ActivatedRoute} object used to obtain the ID parameter from the route
     */
    constructor(
        private godService: GodService,
        private route: ActivatedRoute,
    ) {}

    /**
     * @method ngOnInit
     * @memberOf GodComponent
     * @description Obtains the ID parameter from the current route and uses the {@link GodService} to obtain the
     *              corresponding god from the server. If there is an ongoing request, it is stopped in favor of the
     *              new one.
     */
    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.godService.getGod(+params['id']))
            .subscribe(god => this.god = god);
        }
}