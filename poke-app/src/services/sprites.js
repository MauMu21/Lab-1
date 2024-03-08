const displayPokemonSprites = async (baseURL, pokemonName) => {
    try {
        // Utilizamos la función fetchPokemon para obtener los datos del Pokémon
        const pokemonData = await fetchPokemon(baseURL, pokemonName);

        // Verificamos si los datos del Pokémon incluyen sprites
        if (!pokemonData.sprites || !pokemonData.sprites.front_default) {
            throw new Error(`No se encontró el sprite para el Pokémon: ${pokemonName}`);
        }

        // Creamos una nueva imagen y establecemos su fuente en el sprite del Pokémon
        const img = document.createElement('img');
        img.src = pokemonData.sprites.front_default;

        // Agregamos la imagen al cuerpo del documento
        document.body.appendChild(img);
    } catch (error) {
        console.error("Error al mostrar el sprite del Pokémon:", error);
        throw error;
    }
}
