import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListScreenComponent } from './pokemon-list-screen.component';

describe('PokemonListScreenComponent', () => {
  let component: PokemonListScreenComponent;
  let fixture: ComponentFixture<PokemonListScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListScreenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
