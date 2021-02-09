import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../pokemon.service';

@Pipe({
  name: 'filterByPokemonName',
})
export class FilterByPokemonNamePipe implements PipeTransform {
  transform(pokemonsList: List[], searchQuery: string): List[] {
    searchQuery = searchQuery.trim().toLowerCase();
    if (searchQuery)
      return pokemonsList.filter((pokemon) =>
        pokemon.name.includes(searchQuery)
      );

    return pokemonsList;
  }
}
