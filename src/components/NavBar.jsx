import React, { Component } from 'react';
import logo from '../images/logo.svg';
import menu from '../images/menu.png';
import closeMenu from '../images/close-menu.png';
import './NavBar.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserInfo } from '../service/endPointsAPI';
import { sendUserInfo } from '../redux/actions';
import { Link } from 'react-router-dom';
import 'animate.css';

class NavBar extends Component {
  state = {
    urlImage: '',
    name: '',
    itsShowing: false
  }

  async componentDidMount() {
    const { sendUser } = this.props;
    const { display_name, images } = await getUserInfo();
    this.setState({ name: display_name, urlImage: images[0].url });
    const info = {
      name: display_name,
      urlImage: images[0].url,
    }
    sendUser(info);
  }

  handleOpenMenu = () => {
    this.setState({ itsShowing: true });
  }

  handleCloseMenu = () => {
    this.setState({ itsShowing: false });
  }

  handleLinks = () => this.setState({ itsShowing: false });

  render() {
    const { urlImage, itsShowing } = this.state;
    return (
      <>
        <div 
          className={ itsShowing ? 'nav-links showNav animate__animated animate__bounceInRight' : 'hideNav'}
        >
          <img 
            className="close-menu" src={ closeMenu }
            alt="Icone de um X"
            onClick={ this.handleCloseMenu }
          />
          <ul onClick={ this.handleLinks }>
              <li><Link to="/profile">Top 3</Link></li>
              <li><Link to="/musics">Músicas</Link></li>
              <li><Link to="/artists">Artistas</Link></li>
              <li><Link to="/playlists">Playlists</Link></li>
          </ul>
          <p>_</p>
          <a href="#f" className="exit">Sair</a>
          <img className="logo-menu" src={ logo } alt="Logo StatsSpotify" />
        </div>

        <header>
          <div>
            <img src={ logo } alt="Logotipo Stats Spotify" />
          </div>
          <nav>
            <div className="linksDesktop">
              <ul>
                <li><Link to="/profile">Top 3</Link></li>
                <li><Link to="/musics">Músicas</Link></li>
                <li><Link to="/artists">Artistas</Link></li>
                <li><Link to="/playlists">Playlists</Link></li>
              </ul>
            </div>

            <div className="imageNav">
              <img 
              src={ urlImage ? urlImage : menu }
              className={ urlImage ? 'userImageHeader' : ''}
              alt="Icone de menu"
              onClick={ this.handleOpenMenu }
              />
            </div>
          </nav>
        </header>
        
        </>
    )
  }
};

NavBar.propTypes = {
  urlImage: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  sendUser: (info) => dispatch(sendUserInfo(info)),
});

export default connect(null, mapDispatchToProps)(NavBar);