import React, { Component } from 'react';
import { redirectAcessURL } from '../service/getAcessToken.js';
import './Login.css';
import logoSpotify from '../images/spotify-logo.png';
import CardIllustration from '../components/CardIllustration';
import illustration01 from '../images/illustration-01.svg';
import illustration02 from '../images/illustration-02.svg';

class Login extends Component {
  handleLogin = () => {
    const url = redirectAcessURL();
    window.location = url;
  }

  render() {
    return (
    <>
        <main>
            <section className="mainLogin">
              <div>
                <p>Descubra as músicas e artistas que você mais escutou ao longo do tempo no Spotify</p>
                <button onClick={ this.handleLogin }>
                  ENTRAR
                  <img src={ logoSpotify } alt="Logo do Spotify" />
                </button>
              </div>
            </section>
            <section className="containerCards">
              <CardIllustration
                title="Dados a partir da sua conta do Spotify"
                description="Veja os artistas, músicas e gêneros que você mais escuta, mude entre 1 mês, 6 meses ou AllTime para ver os dados por período. Esses dados são atualizados diariamente."
                url={ illustration02 }
              />
              <CardIllustration
                title="Crie Playlists com as músicas e artistas que você mais escuta"
                description="As playlists contam com até 50 músicas e seleção de período, crie ela aqui e escute direto no App"
                url={ illustration01 }
              />
            </section>
        </main>
    </>
    )
  }
}

export default Login