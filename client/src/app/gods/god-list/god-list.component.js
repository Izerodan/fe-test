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
var god_service_1 = require('../shared/god.service');
/**
 * @class GodListComponent
 * @description Component used to fill and manage a list of gods.
 */
var GodListComponent = (function () {
    /**
     * @constructor
     * @param {GodService} godService the {@link GodService} used to obtain the list of gods
     */
    function GodListComponent(godService) {
        this.godService = godService;
    }
    /**
     * @method ngOnInit
     * @memberOf GodListComponent
     * @description Loads all the gods when this component is loaded
     */
    GodListComponent.prototype.ngOnInit = function () {
        this.getGods();
    };
    /**
     * @method getGods
     * @memberOf GodListComponent
     * @description Returns the list of all the gods from the current server
     */
    GodListComponent.prototype.getGods = function () {
        var _this = this;
        this.godService.getGods()
            .then(function (gods) { return _this.gods = gods; }, function (error) {
            return _this.error = "There was an error while attempting to load the data.\n                Maybe the server is not initialized at port 4000?";
        });
    };
    GodListComponent = __decorate([
        core_1.Component({
            selector: 'god-list',
            templateUrl: './god-list.component.html',
            styleUrls: ['./god-list.component.css']
        }), 
        __metadata('design:paramtypes', [god_service_1.GodService])
    ], GodListComponent);
    return GodListComponent;
}());
exports.GodListComponent = GodListComponent;
//# sourceMappingURL=god-list.component.js.map