
const card = document.querySelector('#app');

const getPokemon = async (id) => {
  const informacion = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
  const resultado = await informacion.json();
  return resultado;
};


getPokemon(1).then(data => {
  card.innerHTML += `
    <div class="card">
      <img class="imagen" src="${data.sprites.other.dream_world.front_default}" alt="">

      <div class="texto"><input type="text" placeholder="Que pokemon es" />
      <button>Responder</button>
      </div>
    </div>
    `;
})