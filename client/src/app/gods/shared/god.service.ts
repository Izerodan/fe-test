import {Injectable} from '@angular/core';
import {Http}       from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {God}       from './god.model';

/**
 * @class GodService
 * @description Service component used to obtain gods data from the server.
 */
@Injectable()
export class GodService {
    private url = 'http://localhost:4000/god/';

    constructor(private http: Http) {}

    /**
     * @method getGods
     * @memberOf GodService
     * @description Attempts to obtains all the gods from the server
     * @returns {Promise<God[]>}    a {@link Promise} object
     */
    getGods(): Promise<God[]> {
        return this.http.get(this.url)
                        .toPromise()
                        .then(response => response.json().data as God[])
                        .catch(this.handleError);
    }

    /**
     * @method getGods
     * @memberOf GodService
     * @description Attempts to obtains a god by its ID from the current server
     * @param {number} id   the ID of the god to obtain
     * @returns {Promise<God>}    a {@link Promise} object
     */
    getGod(id: number): Promise<God> {
        const url = `${this.url}${id}`;
        return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data as God)
                    .catch(this.handleError);
    }

    /**
     * @method handleError
     * @description Handles an error occurred whenever the communication with the server fails.
     * @param {any} error   the error to handle
     * @returns {Promise<any>}  a {@link Promise} object
     */
    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}