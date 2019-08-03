import React, {Component} from 'react';
import './App.css';
import ApiCall from './util/callApi';
import Star from './components/star';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      keySearch: ''
    };
  }
  componentDidMount = () => {
    ApiCall(21, 'GET', null).then(res => {
      console.log('res', res);
      this.setState({
        data: res.data.results
      });
    });
  }
  handleOnChange = (e) => {
    console.log('value', e.target.value);
    const {data} = this.state;
    let items = data.filter(item => item.name.indexOf(e.target.value) !== -1);
    this.setState({
      items,
      keySearch: e.target.value
    }); 
  }
  render() {
    const { data, items, keySearch } = this.state;
    const pokemonRender = (items && items || data).map((pokemon, index) => {
      const url = pokemon.url.substring(pokemon.url.length-2, pokemon.url.length);
      const id = url.substring(0, 1);
      return <li key={index} className="pokemon-item">
      <div  className="pokemon">
          <button style={{ backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`})`}} type="button" className="pokemon-image" />
          <p className="pokemon-name">{pokemon.name}</p>
        </div>
        </li>
    });
    return (
        <div className="pages">
          <div className="page-search">
            <input placeholder="enter pokemon name..." className="pokemon-search" 
                    value={keySearch}
                    onChange={(e) => this.handleOnChange(e)}
            />
          </div>
          <ul className="pokemons">
            {pokemonRender}
          </ul>
        </div>
    );
  }

}

export default App;
