import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../../pokemon.service';

@Pipe({
  name: 'filterByName',
})
export class FilterByNamePipe implements PipeTransform {
  transform(pokemonsList: List[], searchQuery: string): unknown {
    searchQuery = searchQuery.trim().toLowerCase();
    if (searchQuery)
      return pokemonsList.filter((pokemon) =>
        pokemon.name.includes(searchQuery)
      );

    return pokemonsList;
  }
}
