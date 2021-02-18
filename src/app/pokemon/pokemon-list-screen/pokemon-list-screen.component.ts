import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { List, PokemonsListResponse } from '../pokemon.service';

@Component({
  templateUrl: './pokemon-list-screen.component.html',
  styleUrls: ['./pokemon-list-screen.component.scss'],
})
export class PokemonListScreenComponent implements OnInit, OnDestroy {
  debounce: Subject<string> = new Subject<string>();
  pokemonsList: List[] = [];
  filter = '';
  canLoadMore = false;
  currentPage = 1;
  pokemonsListSubscription?: Subscription;
  paramsSubscription?: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.pokemonsListSubscription = this.activatedRoute.data.subscribe(
      (data) => {
        this.pokemonsList = data.pokemonsList.results;
        console.log(data);
        this.canLoadMore = data.pokemonsList.next !== null;
      }
    );

    this.paramsSubscription = this.activatedRoute.params.subscribe((params) => {
      this.currentPage = parseInt(params ? params.page : 1, 10);
    });

    this.debounce.pipe(debounceTime(300)).subscribe((value: string) => {
      this.filter = value;
    });
  }

  emitFilter(event: KeyboardEvent): void {
    const element = event.target as HTMLInputElement;
    this.debounce.next(element.value);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
    this.pokemonsListSubscription?.unsubscribe();
    this.paramsSubscription?.unsubscribe();
  }

  loadMorePokemons(): void {}
}
