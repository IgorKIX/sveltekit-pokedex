import { writable } from 'svelte/store';

export const pokemonList = writable([]);

const fetchPokemonData = async () => {
	const data = await (await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')).json();
	pokemonList.set(createListOfPokemons(data));
};

const createListOfPokemons = (data) => {
	return data.results.map((data, index) => {
		return {
			name: data.name,
			id: index + 1,
			img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});
};

fetchPokemonData();
