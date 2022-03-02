import React, { Component } from 'react';
import goldCrown from '../images/gold-crown.png';
import silverCrown from '../images/silver-crown.png';
import bronzeCrown from '../images/bronze-crown.png';

class Card extends Component {
  render() {
    const { url, name, index } = this.props;
    let crown;
    if ( index === 0) crown = goldCrown
    else if ( index === 1) crown = silverCrown;
    else crown = bronzeCrown

    return (
      <div>
        <img src={ crown } alt="Desenho de uma coroa" />
        <figure>
            <img src={ url } alt={ name } />
            <figcaption>{ name }</figcaption>
        </figure>
      </div>
    )
  }
}

export default Card