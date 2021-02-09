import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PokemonListScreenComponent } from './pokemon/pokemon-list-screen/pokemon-list-screen.component';
import { PokemonDetailScreenComponent } from './pokemon/pokemon-detail-screen/pokemon-detail-screen.component';
import { PokemonListScreenResolver } from './pokemon/pokemon-list-screen/pokemon-list-screen.resolver';

const routes: Routes = [
  {
    path: '',
    component: PokemonListScreenComponent,
    resolve: { pokemonsList: PokemonListScreenResolver },
  },
  { path: 'pokemon/:name', component: PokemonDetailScreenComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
