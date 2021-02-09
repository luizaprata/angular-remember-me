import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { PokemonListComponent } from './list/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { RouterModule } from '@angular/router';
import { FilterByNamePipe } from './list/pokemon-list/filter-by-name.pipe';

@NgModule({
  declarations: [
    PokemonItemComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    FilterByNamePipe,
  ],
  imports: [HttpClientModule, CommonModule, RouterModule],
})
export default class PokemonModules {}
