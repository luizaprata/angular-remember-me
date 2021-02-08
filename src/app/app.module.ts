import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonRoutingModule } from './pokemon/pokemon-routing.module';
import PokemonModules from './pokemon/pokemon.module';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ErrorsModule } from './errors/errors.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [BrowserModule, ErrorsModule, PokemonModules, PokemonRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
