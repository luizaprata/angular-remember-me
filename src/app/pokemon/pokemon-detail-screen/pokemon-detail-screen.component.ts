import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokemonResponse } from '../pokemon.service';

@Component({
  templateUrl: './pokemon-detail-screen.component.html',
  styleUrls: ['./pokemon-detail-screen.component.scss'],
})
export class PokemonDetailScreenComponent implements OnInit, OnDestroy {
  pokemonDetails?: PokemonResponse;
  pokemonDetailsSubscription?: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.pokemonDetailsSubscription = this.activatedRoute.data.subscribe(
      (data) => {
        this.pokemonDetails = data.pokemonDetails;
      }
    );
  }

  ngOnDestroy(): void {
    this.pokemonDetailsSubscription?.unsubscribe();
  }
}
