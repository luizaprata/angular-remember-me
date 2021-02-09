"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PokemonListComponent = void 0;
var core_1 = require("@angular/core");
var PokemonListComponent = /** @class */ (function () {
    function PokemonListComponent(pokemonService) {
        this.pokemonService = pokemonService;
        this.pokemonsList = [];
        this.filter = '';
    }
    PokemonListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemonService
            .listAbility(100, 100)
            .subscribe(function (list) { return (_this.pokemonsList = list.results); });
    };
    PokemonListComponent.prototype.emitFilter = function (event) {
        var element = event.target;
        this.filter = element.value;
    };
    PokemonListComponent = __decorate([
        core_1.Component({
            selector: 'app-pokemon-list',
            templateUrl: './pokemon-list.component.html',
            styleUrls: ['./pokemon-list.component.scss']
        })
    ], PokemonListComponent);
    return PokemonListComponent;
}());
exports.PokemonListComponent = PokemonListComponent;
