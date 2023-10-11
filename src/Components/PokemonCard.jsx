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

const PokemonCard = () => {
  const pokomon = pokemonList[0];
  return (
    <div>
      {pokomon.imgSrc ? (
        <img src={pokomon.imgSrc} alt={pokomon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokomon.name}</figcaption>
    </div>
  );
};

export default PokemonCard;
