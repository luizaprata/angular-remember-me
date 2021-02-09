import { TestBed } from '@angular/core/testing';

import { PokemonListScreenResolver } from './pokemon-list-screen.resolver';

describe('PokemonListScreenResolver', () => {
  let resolver: PokemonListScreenResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PokemonListScreenResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
