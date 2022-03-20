import React, { Component } from 'react';
import logo from '../images/logo.svg';
import menu from '../images/menu.png';
import './NavBar.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class NavBar extends Component {
  render() {
    const { urlImage } = this.props;
    return (
        <header>
          <div>
            <img src={ logo } alt="Logotipo Stats Spotify" />
          </div>
          <nav>
            <img 
            src={ urlImage ? urlImage : menu }
            className={ urlImage ? 'userImageHeader' : false}
            alt="Icone de menu" 
            />
            <ul className="nav-links">
              <li>Home</li>
              <li>Musicas</li>
              <li>Artistas</li>
            </ul>
          </nav>
        </header>
    )
  }
};

NavBar.propTypes = {
  urlImage: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  urlImage: state.user.urlImage,
});

export default connect(mapStateToProps)(NavBar);