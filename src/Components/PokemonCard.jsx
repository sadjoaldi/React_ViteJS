import PropTypes from "prop-types";
function PokemonCard(props) {
  console.log(props);
  // const pokomon = pokemonList[0];
  // const { name, imgSrc } = pokomon;
  return (
    <div>
      {props.pokomon.imgSrc ? (
        <img src={props.pokomon.imgSrc} alt={props.pokomon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{props.pokomon.name}</figcaption>
    </div>
  );
}

PokemonCard.propTypes = {
  pokomon: PropTypes.shape({
    name: PropTypes.number.isRequired,
    imgSrc: PropTypes.imgae,
  }),
};
export default PokemonCard;
