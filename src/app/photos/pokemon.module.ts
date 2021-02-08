import { NgModule } from "@angular/core";
import { PokemonItemComponent } from "./pokemon-item/pokemon-item.component";
import { PokemonListComponent } from './list/pokemon-list/pokemon-list.component';

@NgModule({
  declarations:[PokemonItemComponent, PokemonListComponent],
  exports: [PokemonItemComponent]
})
export default class PokemonModules {}