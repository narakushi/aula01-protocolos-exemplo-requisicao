const fetchPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/25`; /**definindo a url */

    const div = document.querySelector('.card'); /**acessando o elemento no html */

    fetch(url) /**passando a url para fazer a requisição GET */
        .then(response => response.json()) /**requisição, e o retorno é um objeto javascript */
        .then(pokemon => {
            console.log(pokemon);
            div.innerHTML += `<img src="${pokemon.sprites.front_default}"> <p>Nome: ${pokemon.name}</p> <p>Tipo: ${pokemon.types[0].type.name}</p>`;
        }) 
}

fetchPokemon();