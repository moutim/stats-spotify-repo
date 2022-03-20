import React, { Component } from 'react';
import logo from '../images/logo.svg';
import menu from '../images/menu.png';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
        <header>
          <div>
            <img src={ logo } alt="Logotipo Stats Spotify" />
          </div>
          <nav>
            <img src={ menu } alt="Icone de menu" />
            <ul className="nav-links">
              <li>Home</li>
              <li>Musicas</li>
              <li>Artistas</li>
            </ul>
          </nav>
        </header>
    )
  }
}

export default NavBar