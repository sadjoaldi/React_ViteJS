function PokemonCard({ pokomon }) {
  // console.log(props);
  // const pokomon = pokemonList[0];
  const { name, imgSrc } = pokomon;
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
}

export default PokemonCard;
