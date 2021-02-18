import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List } from '../../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  @Input() list: List[] = [];
  @Input() currentPage!: number;
  @Input() canLoadMore!: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLoadMoreClick(): void {
    this.router.navigate([`/${this.currentPage + 1}`]);
  }
}
