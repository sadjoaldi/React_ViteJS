// import { useState } from "react";
// import "./App.css";
// import PokemonCard from "./Components/PokemonCard";

// const pokemonList = [
//   {
//     name: "bulbasaur",
//     imgSrc:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
//   },
//   {
//     name: "charmander",
//     imgSrc:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
//   },
//   {
//     name: "squirtle",
//     imgSrc:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
//   },
//   {
//     name: "pikachu",
//     imgSrc:
//       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
//   },
//   {
//     name: "mew",
//   },
// ];

// function App() {
//   const [pokomonIndex, setPokomonIndex] = useState(0);

//   const handleClickprcd = () => {
//     pokomonIndex > 0
//       ? setPokomonIndex(pokomonIndex - 1)
//       : "Il y a bien un précédent";
//   };
//   const handleClickpsut = () => {
//     pokomonIndex < pokemonList.length - 1
//       ? setPokomonIndex(pokemonList + 1)
//       : "Il y a bien un suivant";
//   };

//   return (
//     <div>
//       <PokemonCard pokomon={pokemonList[pokomonIndex]} />
//       <button onClick={handleClickprcd} disabled={pokomonIndex === 0}>
//         Précédent
//       </button>
//       <button
//         onClick={handleClickpsut}
//         disabled={pokomonIndex === pokemonList.length - 1}
//       >
//         Suivant
//       </button>
//     </div>
//   );
// }

// export default App;
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const suivantPok = () => {
    if (pokemonIndex < pokemonList.length - 1)
      setPokemonIndex(pokemonIndex + 1);
  };
  const precedentPok = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button onClick={precedentPok} disabled={pokemonIndex === 0}>
        Précédent
      </button>
      <button
        onClick={suivantPok}
        disabled={pokemonIndex === pokemonList.length - 1}
      >
        Suivant
      </button>
    </>
  );
}

export default App;
