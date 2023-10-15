import PropTypes from "prop-types";
const NavBar = ({ changPok, pokemonList }) => {
  NavBar.propTypes = {
    pokemonList: PropTypes.array.isRequired,
    changPok: PropTypes.func.isRequired,
  };

  return (
    <div>
      {pokemonList.map((podex) => (
        <button key={podex.id} onClick={() => changPok(podex.id)}>
          {podex.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
