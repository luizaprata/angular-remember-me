"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var pokemon_item_component_1 = require("./pokemon-item/pokemon-item.component");
var pokemon_list_component_1 = require("./pokemon-list/pokemon-list.component");
var pokemon_detail_component_1 = require("./pokemon-detail/pokemon-detail.component");
var router_1 = require("@angular/router");
var filter_by_name_pipe_1 = require("./pokemon-list/filter-by-name.pipe");
var pokemons_component_1 = require("./pokemon-list/pokemons/pokemons.component");
var PokemonModules = /** @class */ (function () {
    function PokemonModules() {
    }
    PokemonModules = __decorate([
        core_1.NgModule({
            declarations: [
                pokemon_item_component_1.PokemonItemComponent,
                pokemon_list_component_1.PokemonListComponent,
                pokemon_detail_component_1.PokemonDetailComponent,
                filter_by_name_pipe_1.FilterByNamePipe,
                pokemons_component_1.PokemonsComponent,
            ],
            imports: [http_1.HttpClientModule, common_1.CommonModule, router_1.RouterModule]
        })
    ], PokemonModules);
    return PokemonModules;
}());
exports["default"] = PokemonModules;
