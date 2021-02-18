import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService, PokemonsListResponse } from '../pokemon.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonListScreenResolver
  implements Resolve<Observable<PokemonsListResponse>> {
  constructor(private service: PokemonService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<PokemonsListResponse> {
    const page = route.paramMap.get('page');
    const pageNumber = page ? parseInt(page, 10) : 0;
    return this.service.listAbility(pageNumber, 100);
  }
}
