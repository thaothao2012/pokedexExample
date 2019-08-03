import React, {Component} from 'react';

class MainPokemon extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {data} = this.props;
        return (
            <ul>
                {data.map((pokemon, index) => {
                    return <li key={index}>
                        <div>
                            <button style={{backgroundImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}} type="button" className="btn btn-large btn-block btn-default"/>
                            <p>{pokemon.name}</p>
                       </div>
                    </li>
                })}
            </ul>
        );
    }
}