import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService, PokemonResponse } from '../pokemon.service';

@Component({
  templateUrl: './pokemon-detail-screen.component.html',
  styleUrls: ['./pokemon-detail-screen.component.scss'],
})
export class PokemonDetailScreenComponent implements OnInit {
  pokemon: PokemonResponse | null = null;

  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const name: string = this.activatedRoute.snapshot.params.name;

    if (name) {
      this.pokemonService
        .detailPokemon(name)
        .subscribe((pokemon) => (this.pokemon = pokemon));
    }
  }
}
