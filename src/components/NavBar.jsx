import React, { Component } from 'react';
import logo from '../images/logo.svg';
import menu from '../images/menu.png';
import './NavBar.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserInfo } from '../service/endPointsAPI';
import { sendUserInfo } from '../redux/actions';
import { Link } from 'react-router-dom';

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
    this.setState((prevState) => ({ itsShowing: !prevState.itsShowing}))
  }

  render() {
    const { urlImage, itsShowing } = this.state;
    return (
      <>
        <header>
          <div>
            <img src={ logo } alt="Logotipo Stats Spotify" />
          </div>
          <nav>
            <img 
            src={ urlImage ? urlImage : menu }
            className={ urlImage ? 'userImageHeader' : ''}
            alt="Icone de menu"
            onClick={ this.handleOpenMenu }
            />
          </nav>
        </header>
        <ul className={ itsShowing ? 'nav-links showNav' : 'nav-links hideNav'}>
          <li><Link to="/profile">Home</Link></li>
          <li><Link to="/musics">Músicas</Link></li>
          <li><Link to="/artists">Artistas</Link></li>
        </ul>
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