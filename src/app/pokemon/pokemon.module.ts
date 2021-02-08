import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { PokemonListComponent } from './list/pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [PokemonItemComponent, PokemonListComponent],
  imports: [HttpClientModule, CommonModule],
})
export default class PokemonModules {}
