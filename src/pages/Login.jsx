import React, { Component } from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import logoPlus from '../images/plus-music-logo.svg'
import logoSpotify from '../images/spotify-logo.png';
import { redirectAcessURL } from '../service/getAcessToken';

class Login extends Component {
  handleLogin = () => {
    const url = redirectAcessURL();
    window.location = url;
  }

  render() {
    return (
        <>
            <main>
            <section >
                <div>
                    <img src={ logoPlus } alt="Logotipo do Plus Music em formato de disco de vinil."></img>
                </div>

                <div>
                    <h2>Entre com sua conta Spotify</h2>
                    <div>
                        <img src={ logoSpotify } alt="Logo Spotify"></img>
                        <button type="button" onClick={ this.handleLogin }>Entrar</button>
                    </div>
                </div>
            </section>
            <section>
                <p>Um lugar para compartilhar suas musicas favoritas,</p>
                <p>Porque compartilhar e escutar muda tudo.</p>
            </section>
        </main>
        <footer>Play Music 2022 ® Desenvolvido por <a href="https://github.com/moutim">Vitor Moutim</a></footer>
    </>
    )
  }
}

export default Login