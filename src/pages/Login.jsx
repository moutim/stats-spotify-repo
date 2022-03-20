import React, { Component } from 'react';
import Footer from '../components/Footer';
import { redirectAcessURL } from '../service/getAcessToken';
import './Login.css';
import logoSpotify from '../images/spotify-logo.png';

class Login extends Component {
  handleLogin = () => {
    const url = redirectAcessURL();
    window.location = url;
  }

  render() {
    return (
    <>
        <main className="mainLogin">
            <section>
                <p>Descubra as músicas e artistas que você mais escutou ao longo do tempo no Spotify</p>
                <button onClick={ this.handleLogin }>
                  ENTRAR
                  <img src={ logoSpotify } alt="Logo do Spotify" />
                </button>
            </section>
        </main>
        <Footer />
    </>
    )
  }
}

export default Login