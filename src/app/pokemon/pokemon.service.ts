import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const POKE_API = 'https://pokeapi.co/api/v2';

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

export type PokemonResponse = {
  id: number;
  name: string;
  height: number;
  weight: number;
};

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  listAbility(limit: number, offset: number) {
    return this.http.get<PokemonsAbilityResponse>(
      `${POKE_API}/pokemon/?limit=${limit}&offset=${offset}`
    );
  }

  detailPokemon(name: string) {
    return this.http.get<PokemonResponse>(`${POKE_API}/pokemon/${name}`);
  }
}
