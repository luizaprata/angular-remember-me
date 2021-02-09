"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PokemonDetailComponent = void 0;
var core_1 = require("@angular/core");
var PokemonDetailComponent = /** @class */ (function () {
    function PokemonDetailComponent(pokemonService, activatedRoute) {
        this.pokemonService = pokemonService;
        this.activatedRoute = activatedRoute;
        this.pokemon = null;
    }
    PokemonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var name = this.activatedRoute.snapshot.params.name;
        if (name) {
            this.pokemonService
                .detailPokemon(name)
                .subscribe(function (pokemon) { return (_this.pokemon = pokemon); });
        }
    };
    PokemonDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-pokemon-detail',
            templateUrl: './pokemon-detail.component.html',
            styleUrls: ['./pokemon-detail.component.scss']
        })
    ], PokemonDetailComponent);
    return PokemonDetailComponent;
}());
exports.PokemonDetailComponent = PokemonDetailComponent;
