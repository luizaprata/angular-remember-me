import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { List } from '../pokemon.service';

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

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.pokemonsList = this.activatedRoute.snapshot.data.pokemonsList.results;
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
  }

  loadMorePokemons(): void {}
}
