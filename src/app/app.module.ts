import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonRoutingModule } from './pokemon/pokemon-routing.module';
import PokemonModules from './pokemon/pokemon.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PokemonModules, PokemonRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
