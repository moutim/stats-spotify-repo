import React, { Component } from 'react';
import CardIllustration from '../components/CardIllustration';
import './Playlists.css';
import illustration06 from '../images/illustration-06.svg';
import TimeSelectionButtons from '../components/TimeSelectionButtons';
import { addMusicsPlaylist, createPlaylist, getUserInfo, getUserTopMusics } from '../service/endPointsAPI';

class Playlists extends Component {
  state = {
    period: 'medium',
    linkPlaylist: ''
  }
  handleSelectPeriod = ({ target: { id }}) => this.setState({ period: id });

  convertPeriodToTitle = (period) => {
    if (period === 'short') return 'Um mês';
    if (period === 'medium') return '6 meses';
    if (period === 'long') return 'Desde o início';
  }

  handleCreatePlaylist = async () => {
    const { period } = this.state;
    const { id } = await getUserInfo();
    const data = await createPlaylist(this.convertPeriodToTitle(period), id);
    const { items } = await getUserTopMusics(period);
    const listMusics = items.map(({ uri }) => uri);
    await addMusicsPlaylist(data.id, listMusics);
    this.setState({ linkPlaylist: data.external_urls.spotify })
  }
  render() {
    return (
      <main className="main-general">
        <CardIllustration
          title="Chegou a hora de criar uma playlist com todas as suas músicas mais ouvidas! Selecione o período abaixo e cliquei em gerar"
          description="A playlist terá 50 músicas e você pode escolher as mais tocadas do último mês, dos 6 meses ou desde o início."
          url={ illustration06 }
        />

        <div className="container-create-playlist">
          <TimeSelectionButtons
          handleSelectTime={ this.handleSelectPeriod }
          />
          {
            this.state.linkPlaylist && 
              <a target="_blank" href={ this.state.linkPlaylist } className="playlistCreated" rel="noreferrer">
                Playlist criada! Clique aqui para abrir
              </a>
          }
          <button 
            type="button"
            onClick={ this.handleCreatePlaylist }
            className="buttonPlaylist"
          >
            Criar
          </button>
        </div>

      </main>
    )
  }
}

export default Playlists