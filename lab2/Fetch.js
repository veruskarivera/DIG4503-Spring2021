import axios from "axios";
import chalk from "chalk";

class Fetch {
  constructor(pokemon, color) {
    this.pokemon = pokemon;
    this.color = color;
  }
  fetch() {
    axios("https://pokeapi.co/api/v2/pokemon/" + this.pokemon)
      .then(response => {
        const poke = response.data;
        console.log(
          chalk.hex(this.color)(poke.name + "and the id is " + poke.id)
        );
      })
      .catch(error => {
        console.log(chalk.red("Invalid ID " + error));
      });
  }
}

export default Fetch;
