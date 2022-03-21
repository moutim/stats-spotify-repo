import React, { Component } from 'react';
import './Top50.css';
import ItemList from '../components/ItemList';
import { getUserTopMusics } from '../service/endPointsAPI';
import TimeSelectionButtons from '../components/TimeSelectionButtons';
import illustration05 from '../images/illustration-05.svg';
import CardIllustration from '../components/CardIllustration';

class TopMusics extends Component {
  state = {
    musics: [],
    loading: true,
    totalMinutes: 0,
    artists: []
  }

  async componentDidMount() {
    let totalMs = 0;
    let artists = {};
    const { items } = await getUserTopMusics();
    items.forEach(({ album }) => artists[album.artists[0].name] = album.artists[0].name);
    items.forEach(({ duration_ms }) => totalMs += duration_ms);
    let totalSec = totalMs * 0.001;
    let totalMinutes = (totalSec / 60).toFixed(0);
    this.setState({ musics: items, loading: false, totalMinutes, artists: Object.keys(artists) });
  }

  handleSelectTime = async ({ target: { id }}) => {
    this.setState({ loading: true });
    const { items } = await getUserTopMusics(id);
    this.setState({ musics: items, loading: false });
  }

  render() {
    const { musics, loading, totalMinutes, artists } = this.state;
    return (
      <>
        <main className="main-general">
          <CardIllustration 
            title={`Uau! Sua lista de músicas da um total de ${totalMinutes} minutos! Que tal criar uma playlist com todas elas?`}
            description={`Existem ao todo, ${artists.length} artistas na sua lista.`}
            url={ illustration05 }
          />
          <article className="top-50">
          <h2>Lista com as 50 músicas que você mais escutou!</h2>
          <TimeSelectionButtons handleSelectTime={ this.handleSelectTime } />
            { loading ? <p>loading...</p> :
              musics.map(({ name, album: { images }, artists }, index) => {
                const { url } = images[0];
                const { name: artistName } = artists[0];
                return (
                  <ItemList 
                    key={ name }
                    index={ index + 1}
                    url={ url }
                    name={ name }
                    type={ artistName }
                  />
                )
              })
            }
          </article>
        </main>
      </>
    )
  }
}

export default TopMusics;