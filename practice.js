const pokedex = document.getElementById('pkmnlist');
console.log(pokedex);
const fetchPokemon = () => {
    for(let i=1; i<=150; i++){
        console.log('fetching pokemon...');
        const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
        
        fetch(url).then(response => response.json())
            .then((data) => {
            console.log(data);
            const pokemon = {};
            pokemon['name'] = data.name;
            pokemon['id'] = data.id;
            pokemon['sprite'] = data.sprites.front_default;
            pokemon['type'] = '  ';
            data.types.forEach((type) => {
                pokemon['type'] = pokemon['type'] + ' ' + type.type.name;
            });
            dispPokemon(pokemon);

        });     // end of fetch
    }

    const dispPokemon = (pokemon) => {
        console.log(pokemon);
        const pkmnString = 
            `<li class = "card">
                <img class = "cardImage" src="${pokemon.sprite}">
                <h3 class = "cardInfo">${pokemon.name}</h3>
                <p class = "cardType">Type: ${pokemon.type}</p>
            </li>`
        ;
        pokedex.innerHTML += pkmnString;
    }

}

fetchPokemon();