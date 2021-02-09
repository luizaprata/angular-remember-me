import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailScreenComponent } from './pokemon-detail-screen.component';

describe('PokemonDetailScreenComponent', () => {
  let component: PokemonDetailScreenComponent;
  let fixture: ComponentFixture<PokemonDetailScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonDetailScreenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
