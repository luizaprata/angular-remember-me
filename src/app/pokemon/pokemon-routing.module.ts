import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonListComponent } from './list/pokemon-list/pokemon-list.component';

const routes: Routes = [{ path: 'list', component: PokemonListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
