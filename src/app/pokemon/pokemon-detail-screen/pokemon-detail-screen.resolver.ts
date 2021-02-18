import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PokemonResponse, PokemonService } from '../pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonDetailScreenResolver implements Resolve<PokemonResponse> {
  constructor(private service: PokemonService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<PokemonResponse> {
    const name = route.paramMap.get('name') || '';
    return this.service.detailPokemon(name);
  }
}
