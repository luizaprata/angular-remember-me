import { Component, Input, OnInit } from '@angular/core';
import { List } from '../../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  @Input() list: List[] = [];

  constructor() {}

  ngOnInit(): void {}
}
