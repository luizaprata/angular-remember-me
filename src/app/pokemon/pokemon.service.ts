import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  listAbility(page: number, limit: number): Observable<PokemonsListResponse> {
    const params = new HttpParams()
      .append('limit', limit.toString())
      .append('offset', (limit * page).toString());

    return this.http.get<PokemonsListResponse>(`${POKE_API}/pokemon`, {
      params,
    });
  }

  detailPokemon(name: string): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`${POKE_API}/pokemon/${name}`);
  }
}
