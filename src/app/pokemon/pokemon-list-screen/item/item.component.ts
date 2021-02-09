import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class PokemonListItemComponent implements OnInit {
  @Input() name: string = '';

  constructor() {}

  ngOnInit(): void {}
}
