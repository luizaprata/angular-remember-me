import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PokemonDetailScreenComponent } from './pokemon-detail-screen/pokemon-detail-screen.component';
import { RouterModule } from '@angular/router';
import { FilterByPokemonNamePipe } from './pokemon-list-screen/filter-by-pokemon-name.pipe';
import { PokemonListScreenComponent } from './pokemon-list-screen/pokemon-list-screen.component';
import { PokemonListComponent } from './pokemon-list-screen/list/list.component';
import { PokemonListItemComponent } from './pokemon-list-screen/item/item.component';

@NgModule({
  declarations: [
    FilterByPokemonNamePipe,
    PokemonDetailScreenComponent,
    PokemonListScreenComponent,
    PokemonListComponent,
    PokemonListItemComponent,
  ],
  imports: [HttpClientModule, CommonModule, RouterModule],
})
export default class PokemonModules {}
