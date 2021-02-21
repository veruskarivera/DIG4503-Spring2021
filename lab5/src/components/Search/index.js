import { useState } from "react";
import Axios from "axios";
import Pokemon from "../Pokemon";

function Search() {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function searchMonsters() {
    setLoading(true);

    Axios("https://pokeapi.co/api/v2/pokemon/" + search)
      .then(response => {
        setPokemon(response.data);

        setLoading(false);
      })
      .catch(() => {
        setError("Not found!");
      });
  }

  return (
    <div>
      <button onClick={() => searchMonsters()}>Search your Pokemon:</button>
      <input
        type="text"
        onChange={event => {
          setSearch(event.target.value);
        }}
      />

      {<p>Searched Pokemon: {search}</p>}
      {loading == true ? (
        <p>{error}</p>
      ) : (
        <div>
          <Pokemon
            name={pokemon.name}
            id={pokemon.id}
            sprites={pokemon.sprites.front_default}
          />
        </div>
      )}
    </div>
  );
}

export default Search;
