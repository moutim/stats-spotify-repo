import React, { Component } from 'react';
import './CardIllustration.css';

class CardIllustration extends Component {
  render() {
    const { title, description, url } = this.props;
    return (
      <div className="cardIllustration">
          <h2>{ title }</h2>
          <p>{ description }</p>
          <img src={ url } alt="Ilustracao de uma pessoa escutando musica." />
      </div>
    )
  }
}

export default CardIllustration;