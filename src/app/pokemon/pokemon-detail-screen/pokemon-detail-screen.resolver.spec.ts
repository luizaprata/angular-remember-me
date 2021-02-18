import { TestBed } from '@angular/core/testing';

import { PokemonDetailScreenResolver } from './pokemon-detail-screen.resolver';

describe('PokemonDetailScreenResolver', () => {
  let resolver: PokemonDetailScreenResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PokemonDetailScreenResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
