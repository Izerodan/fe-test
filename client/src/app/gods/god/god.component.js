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
var router_1 = require('@angular/router');
require('rxjs/add/operator/switchMap');
var god_service_1 = require('../shared/god.service');
/**
 * @class GodComponent
 * @description Component used to obtain a single god and manage its view.
 */
var GodComponent = (function () {
    /**
     * @constructor
     * @param {GodService} godService   the {@link GodService} used to obtain the god object/s from the server
     * @param {ActivatedRoute} route    the {@link ActivatedRoute} object used to obtain the ID parameter from the route
     */
    function GodComponent(godService, route) {
        this.godService = godService;
        this.route = route;
    }
    /**
     * @method ngOnInit
     * @memberOf GodComponent
     * @description Obtains the ID parameter from the current route and uses the {@link GodService} to obtain the
     *              corresponding god from the server. If there is an ongoing request, it is stopped in favor of the
     *              new one.
     */
    GodComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.godService.getGod(+params['id']); })
            .subscribe(function (god) { return _this.god = god; });
    };
    GodComponent = __decorate([
        core_1.Component({
            selector: 'god',
            templateUrl: './god.component.html',
            styleUrls: ['./god.component.css']
        }), 
        __metadata('design:paramtypes', [god_service_1.GodService, router_1.ActivatedRoute])
    ], GodComponent);
    return GodComponent;
}());
exports.GodComponent = GodComponent;
//# sourceMappingURL=god.component.js.map