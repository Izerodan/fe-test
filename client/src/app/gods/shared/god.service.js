"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
/**
 * @class GodService
 * @description Service component used to obtain gods data from the server.
 */
var GodService = (function () {
    function GodService(http) {
        this.http = http;
        this.url = 'http://localhost:4000/god/';
    }
    /**
     * @method getGods
     * @memberOf GodService
     * @description Attempts to obtains all the gods from the server
     * @returns {Promise<God[]>}    a {@link Promise} object
     */
    GodService.prototype.getGods = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    /**
     * @method getGods
     * @memberOf GodService
     * @description Attempts to obtains a god by its ID from the current server
     * @param {number} id   the ID of the god to obtain
     * @returns {Promise<God>}    a {@link Promise} object
     */
    GodService.prototype.getGod = function (id) {
        var url = "" + this.url + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    /**
     * @method handleError
     * @description Handles an error occurred whenever the communication with the server fails.
     * @param {any} error   the error to handle
     * @returns {Promise<any>}  a {@link Promise} object
     */
    GodService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    GodService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GodService);
    return GodService;
}());
exports.GodService = GodService;
//# sourceMappingURL=god.service.js.map