import React, { Component } from 'react';
import logoStats from '../images/stats-spotify.svg';
import './AboutStats.css';

class AboutStats extends Component {
  render() {
    return (
      <article>
          <div>
            <img src={ logoStats } alt="Logo da Stats Spotify" />
            Stats Spotify
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