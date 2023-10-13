import PropTypes from "prop-types";
const NavBar = ({
  pokemonIndex,
  handleClickprcd,
  handleClickpsut,
  pokemonList,
}) => {
  NavBar.propTypes = {
    pokemonIndex: PropTypes.number.isRequired,
    handleClickprcd: PropTypes.func.isRequired,
    handleClickpsut: PropTypes.func.isRequired,
    pokemonList: PropTypes.array.isRequired,
  };
  return (
    <div>
      <button onClick={handleClickprcd} disabled={pokemonIndex === 0}>
        Précédent
      </button>
      <button
        onClick={handleClickpsut}
        disabled={pokemonIndex === pokemonList.length - 1}
      >
        Suivant
      </button>
    </div>
  );
};

export default NavBar;
