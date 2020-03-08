import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      type: [],
      pokedexID: -1,
    };

    this.onDropdown = this.onDropdown.bind(this);
    this.onClickPokemonName = this.onClickPokemonName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get('/getall')
      .then((data) => {
        var types = {};

        data.data.forEach((pokemon) => {
          if (types[pokemon.type] === undefined) {
            types[pokemon.type] = 1;
          }
        });

        this.setState(
          {
            pokemons: data.data,
            type: Object.keys(types),
          },
          () => console.log(this.state)
        );
      })
      .catch((err) => console.error('Class App - ComponentDidMount:', err));
  }

  onDropdown(e) {
    let endpoint = '/get/' + e.target.value;

    if (e.target.value === 'Sort by Type') {
      endpoint = '/getall/';
    }

    axios.get(endpoint).then((data) => this.setState({ pokemons: data.data }));
  }

  onClickPokemonName(index) {
    this.setState({
      pokedexID: index,
    });
  }

  onSubmit(e, index) {
    e.preventDefault();

    axios
      .put(`/changeName/${this.state.pokemons[index].id}`, {
        data: e.target.newName.value,
      })
      .catch((err) => console.error('Class App - onSubmit - Error', err));

    var temp = this.state.pokemons.slice();
    temp[index].name = e.target.newName.value;

    document.getElementById(e.target.id).reset();
    this.setState({
      pokedexID: -1,
      pokemons: temp,
    });
  }

  render() {
    console.log(this.state.pokemons);
    return (
      <div>
        <div>
          <h1>Pokemon!</h1>
          <button>Show All</button>

          <select onChange={this.onDropdown}>
            <option>Sort by Type</option>
            {this.state.type.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>

          <button>INSERT</button>

          {this.state.pokemons.map((pokemon, index) => (
            <div key={index}>
              {this.state.pokedexID === index ? (
                <form id="formSubmit" onSubmit={(e) => this.onSubmit(e, index)}>
                  <input required name="newName" placeholder={pokemon.name} />
                  <button>Submit</button>
                  <img src={pokemon.img}></img>
                </form>
              ) : (
                <div>
                  <h3 onClick={() => this.onClickPokemonName(index)}>
                    {pokemon.name}
                  </h3>
                  <img src={pokemon.img}></img>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('poke'));
