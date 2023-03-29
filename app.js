
const usuarios = [
  {
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://reqres.in/img/faces/7-image.jpg"
  },
  {
    "id": 8,
    "email": "lindsay.ferguson@reqres.in",
    "first_name": "Lindsay",
    "last_name": "Ferguson",
    "avatar": "https://reqres.in/img/faces/8-image.jpg"
  },
  {
    "id": 9,
    "email": "tobias.funke@reqres.in",
    "first_name": "Tobias",
    "last_name": "Funke",
    "avatar": "https://reqres.in/img/faces/9-image.jpg"
  },
  {
    "id": 10,
    "email": "byron.fields@reqres.in",
    "first_name": "Byron",
    "last_name": "Fields",
    "avatar": "https://reqres.in/img/faces/10-image.jpg"
  },
  {
    "id": 11,
    "email": "george.edwards@reqres.in",
    "first_name": "George",
    "last_name": "Edwards",
    "avatar": "https://reqres.in/img/faces/11-image.jpg"
  },
  {
    "id": 12,
    "email": "rachel.howell@reqres.in",
    "first_name": "Rachel",
    "last_name": "Howell",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  }, {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  {
    "id": 3,
    "email": "emma.wong@reqres.in",
    "first_name": "Emma",
    "last_name": "Wong",
    "avatar": "https://reqres.in/img/faces/3-image.jpg"
  },
  {
    "id": 4,
    "email": "eve.holt@reqres.in",
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://reqres.in/img/faces/4-image.jpg"
  },
  {
    "id": 5,
    "email": "charles.morris@reqres.in",
    "first_name": "Charles",
    "last_name": "Morris",
    "avatar": "https://reqres.in/img/faces/5-image.jpg"
  },
  {
    "id": 6,
    "email": "tracey.ramos@reqres.in",
    "first_name": "Tracey",
    "last_name": "Ramos",
    "avatar": "https://reqres.in/img/faces/6-image.jpg"
  }
];

// console.log(usuario)

const card = document.querySelector('#app');

// usuarios.forEach( usuario => {
//   card.innerHTML += `
// <div class="card">
// <img src="${usuario.avatar}" alt="">
// <h3>${usuario.first_name} ${usuario.last_name}</h3>
// </div>
// `;
// })

// for (let pokemon = 1; pokemon < 300; pokemon++) {
//   card.innerHTML += `
//   <div class="card">
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon}.svg" alt="">
//   </div>
//   `;

// }

// for (let item = 1; item <= 8; item++) {
// const pokemon = new Promise( (resolve, reject) => {
//   const informacion = fetch(`https://pokeapi.co/api/v2/pokemon/${item}`).then( resultado => resultado.json().then( data => {

//   card.innerHTML += `
//      <div class="card">
//        <img src="${data.sprites.other.dream_world.front_default}" alt="">
//        <p>${data.name}</p>
//      </div>
//      `;

//   }))
// })
// }

const getPokemon = async (id) => {
  const informacion = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
  const resultado = await informacion.json();
  return resultado;
};



new Array(10).fill(null).forEach((d, data) => getPokemon(data).then(data => {
  card.innerHTML += `
    <div class="card">
      <img src="${data.sprites.other.dream_world.front_default}" alt="">
      <p>${data.name}</p>
    </div>
    `;
}));