const popup = document.querySelector('.popupWrapper')
const closeButton = document.querySelector('.popupClose')
const popupContentId = document.getElementById('popupContentId')


const max = 1;
var pokemonId = 0;


function readMoreButton(pokemonId) {
    popup.style.display = 'block'
    loadPokemonAttribute(pokemonId-1, max)
    return
}

    popup.addEventListener('click', event => {
        const classNameOfClickedElement = event.target.classList[0]
        const classNames = ['popupClose', 'popupWrapper']
        const shouldClosePopup = classNames.some(className => 
            className === classNameOfClickedElement)

        if (shouldClosePopup) {
            popup.style.display = 'none'
        } 
        
    })

    function loadPokemonAttribute(pokemonId, max) {
        pokeApi.getPokemons(pokemonId, max).then((pokemons = []) => {
            const newHtml = pokemons.map((pokemon) =>
            `<li class="pokemon ${pokemon.type}">           
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detailAtributesAndImg">
                    <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
                    <div class="detail">
                        <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                    </div>
                    <ol class="attributes">
                        <li class="attributesTitle">Height:</li>
                        <li class="attributesContent">${pokemon.height}</li>
                        <li class="attributesTitle">Weight:</li>
                        <li class="attributesContent">${pokemon.weight}</li>
                        <li class="attributesTitle">Abilities:</li>
                        <ol class="abilities">
                            ${pokemon.abilities.map((ability) => `<li class="ability ${ability}">${ability}</li>`).join('')}
                        </ol>
                    </ol>
                </div>
            </li>
            `)
                popupContentId.innerHTML = newHtml
                
        })
    }
    