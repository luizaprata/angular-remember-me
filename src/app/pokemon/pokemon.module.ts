import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { RouterModule } from '@angular/router';
import { FilterByPokemonNamePipe } from './pokemon-list/filter-by-pokemon-name.pipe';
import { PokemonsComponent } from './pokemon-list/pokemons/pokemons.component';

@NgModule({
  declarations: [
    FilterByPokemonNamePipe,
    PokemonItemComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonsComponent,
  ],
  imports: [HttpClientModule, CommonModule, RouterModule],
})
export default class PokemonModules {}
