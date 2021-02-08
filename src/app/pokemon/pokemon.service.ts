import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type PokemonsAbility = {
  name: string;
  url: string;
};

export type PokemonsAbilityResponse = {
  count: number;
  next: string;
  previous: string;
  results: PokemonsAbility[];
};

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  listAbility() {
    return this.http.get<PokemonsAbilityResponse>(
      'https://pokeapi.co/api/v2/ability/?limit=20&offset=20'
    );
  }
}
