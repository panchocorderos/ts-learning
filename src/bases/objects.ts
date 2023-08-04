export const pokemonIds: Array<number> = [1, 2, 30, 34, 66]


interface PokemonI {
    id: number,
    name: string,
    age?: number,
}

export const pokemon: PokemonI = {
    id: 1,
    name: 'Bulbasaur',
}

export const charmander: PokemonI = {
    id: 2,
    name: 'Charmander'
}

export const pokemons: PokemonI[] = [
    charmander,
    pokemon
]

console.log(pokemon)