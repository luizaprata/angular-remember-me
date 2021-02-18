import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PokemonListScreenComponent } from './pokemon/pokemon-list-screen/pokemon-list-screen.component';
import { PokemonDetailScreenComponent } from './pokemon/pokemon-detail-screen/pokemon-detail-screen.component';
import { PokemonListScreenResolver } from './pokemon/pokemon-list-screen/pokemon-list-screen.resolver';
import { PokemonDetailScreenResolver } from './pokemon/pokemon-detail-screen/pokemon-detail-screen.resolver';

const routes: Routes = [
  {
    matcher: (url) => {
      if (url[0] && url[0].path.match(/^\d+$/)) {
        return {
          consumed: url,
          posParams: {
            page: new UrlSegment(url[0].path, {}),
          },
        };
      }
      return null;
    },
    component: PokemonListScreenComponent,
    resolve: { pokemonsList: PokemonListScreenResolver },
  },
  { path: '', redirectTo: '/0', pathMatch: 'full' },
  {
    path: 'pokemon/:name',
    component: PokemonDetailScreenComponent,
    resolve: { pokemonDetails: PokemonDetailScreenResolver },
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
