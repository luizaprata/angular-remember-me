import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PokemonService, PokemonsListResponse } from '../pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonListScreenResolver
  implements Resolve<Observable<PokemonsListResponse>> {
  constructor(private service: PokemonService) {}

  resolve(): Observable<PokemonsListResponse> {
    return this.service.listAbility(100, 100);
  }
}
