import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const POKE_API = 'https://pokeapi.co/api/v2';

export type List = {
  name: string;
  url: string;
};

export type PokemonsListResponse = {
  count: number;
  next: string;
  previous: string;
  results: List[];
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
    return this.http.get<PokemonsListResponse>(
      `${POKE_API}/pokemon/?limit=${limit}&offset=${offset}`
    );
  }

  detailPokemon(name: string) {
    return this.http.get<PokemonResponse>(`${POKE_API}/pokemon/${name}`);
  }
}
