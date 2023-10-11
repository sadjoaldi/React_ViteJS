import "./App.css";
import PokemonCard from "./Components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const pokomon = pokemonList[0];
  return (
    <div>
      <PokemonCard pokomon={pokomon} />
    </div>
  );
}

export default App;
