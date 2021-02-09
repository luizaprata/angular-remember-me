"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PokemonService = void 0;
var core_1 = require("@angular/core");
var POKE_API = 'https://pokeapi.co/api/v2';
var PokemonService = /** @class */ (function () {
    function PokemonService(http) {
        this.http = http;
    }
    PokemonService.prototype.listAbility = function (limit, offset) {
        return this.http.get(POKE_API + "/pokemon/?limit=" + limit + "&offset=" + offset);
    };
    PokemonService.prototype.detailPokemon = function (name) {
        return this.http.get(POKE_API + "/pokemon/" + name);
    };
    PokemonService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PokemonService);
    return PokemonService;
}());
exports.PokemonService = PokemonService;
