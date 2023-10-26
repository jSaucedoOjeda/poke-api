
document.getElementById('search').addEventListener('click', () => {
    displayPokemon();
});

async function displayPokemon() {
    const pokemonName = document.getElementById('pokemon').value;
    const pokemon = await getPokemon(pokemonName);
    addPokemon(pokemon);
}

async function getPokemon(name) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return await response.json();
}

function addPokemon(pokemon) {
    const pokemonList = document.getElementById('pokemon-container');
    const element = document.createElement('div');
    element.innerHTML = `
        <strong>Id</strong>: ${pokemon.id}
        <strong>Name</strong>: ${pokemon.name}
        <strong>Base Experience</strong>: ${pokemon.base_experience}
        <strong>First Ability</strong>: ${pokemon.abilities[0].ability.name}
    `;
    pokemonList.appendChild(element);
}
    