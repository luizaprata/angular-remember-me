import { Component, Input, OnInit } from '@angular/core';
import { List } from '../../pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  @Input() list: List[] = [];

  constructor() {}

  ngOnInit(): void {}
}
