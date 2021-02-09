import { FilterByPokemonNamePipe } from './filter-by-pokemon-name.pipe';

describe('FilterByPokemonNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByPokemonNamePipe();
    expect(pipe).toBeTruthy();
  });
});
