// import PropTypes from "prop-types";

// const PokemonCard = ({ pokomon }) => {
//   PokemonCard.propTypes = {
//     pokomon: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       imgSrc: PropTypes.string,
//     }),
//   };
//   return (
//     <div>
//       {pokomon.imgSrc ? (
//         <img src={pokomon.imgSrc} alt={pokomon.name} />
//       ) : (
//         <p>???</p>
//       )}
//       <figcaption>{pokomon.name}</figcaption>
//     </div>
//   );
// };

// export default PokemonCard;
import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }),
  };

  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
};

export default PokemonCard;
