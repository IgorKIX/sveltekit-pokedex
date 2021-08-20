<script>
	import { pokemonList } from '../stores/pokestore';
	import PokemonCard from '../components/pokemonCard.svelte';

	let searchTerm = '';
	let filteredPokemonList = [];

	$: {
		if (searchTerm) {
			filteredPokemonList = $pokemonList.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemonList = [...$pokemonList];
		}
	}
</script>

<h1 class="text-4xl text-center my-8 uppercase">Pokedex</h1>

<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	placeholder="Search Pokemon"
	bind:value={searchTerm}
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemonList as pokemon}
		<PokemonCard {pokemon} />
	{/each}
</div>
