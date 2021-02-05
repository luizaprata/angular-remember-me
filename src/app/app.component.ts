import { Component, OnInit } from '@angular/core';
import { PokemonsAbility, PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  pokemonsAbility:PokemonsAbility[] = []
  
  constructor(private pokemonService:PokemonService){
    
  }
  ngOnInit(): void {
    this.pokemonService.listAbility().subscribe(list => this.pokemonsAbility = list.results)
  }

}
