import './style.css'
import fetchPokemon from './src/services/api.js';

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonDisplay = document.getElementById('pokemon-display');

searchButton.addEventListener('click', async () => {
    const query = searchInput.value.trim();
    if (!query) return; // No buscar si el input está vacío.
    try {
        const pokemon = await fetchPokemon('https://pokeapi.co/api/v2/pokemon/', query);
        displayPokemonSprites(pokemon); 
    } catch (error) {
        console.error("Error al buscar el Pokémon:", error);
    }
});

const displayPokemonSprites = (pokemon) => {
    pokemonDisplay.innerHTML = '';
    const pokemonSprite = document.createElement('img');
    pokemonSprite.src = pokemon.sprites.front_default;
    pokemonDisplay.appendChild(pokemonSprite);
}

