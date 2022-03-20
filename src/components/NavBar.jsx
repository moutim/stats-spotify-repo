import React, { Component } from 'react';
import logo from '../images/logo.svg';
import menu from '../images/menu.png';
import './NavBar.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserInfo } from '../service/endPointsAPI';
import { sendUserInfo } from '../redux/actions';

class NavBar extends Component {
  state = {
    urlImage: '',
    name: '',
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
  render() {
    const { urlImage } = this.state;
    return (
        <header>
          <div>
            <img src={ logo } alt="Logotipo Stats Spotify" />
          </div>
          <nav>
            <img 
            src={ urlImage ? urlImage : menu }
            className={ urlImage ? 'userImageHeader' : ''}
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
  urlImage: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  sendUser: (info) => dispatch(sendUserInfo(info)),
});

export default connect(null, mapDispatchToProps)(NavBar);