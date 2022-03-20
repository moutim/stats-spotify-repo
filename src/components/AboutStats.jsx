import React, { Component } from 'react';
import logoStats from '../images/logo.svg';
import './AboutStats.css';

class AboutStats extends Component {
  render() {
    return (
      <article className="aboutStats" >
          <div>
            <img src={ logoStats } alt="Logo da Stats Spotify" />
          </div>
          <div>
              <p>Essas são suas estatísticas personalizadas com base na sua conta do Spotify</p>
          </div>
          <hr />
      </article>
    )
  }
}

export default AboutStats