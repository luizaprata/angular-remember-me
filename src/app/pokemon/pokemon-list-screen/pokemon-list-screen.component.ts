import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { List } from '../pokemon.service';

@Component({
  templateUrl: './pokemon-list-screen.component.html',
  styleUrls: ['./pokemon-list-screen.component.scss'],
})
export class PokemonListScreenComponent implements OnInit, OnDestroy {
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
        this.filter = '';
        this.pokemonsList = data.pokemonsList.results;
        this.canLoadMore = data.pokemonsList.next !== null;
      }
    );

    this.paramsSubscription = this.activatedRoute.params.subscribe((params) => {
      this.currentPage = parseInt(params ? params.page : 1, 10);
    });
  }

  ngOnDestroy(): void {
    this.pokemonsListSubscription?.unsubscribe();
    this.paramsSubscription?.unsubscribe();
  }

  loadMorePokemons(): void {}
}
