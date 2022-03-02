import React, { Component } from 'react';
import './Top10Artists.css';
import { getUserTopArtists } from '../service/endPointsAPI';
import Card from './Card';

class Top10Artists extends Component {
  state = {
    artists: [],
    loading: true,
  }

  async componentDidMount() {
    const { items } = await getUserTopArtists();
    this.setState({ artists: items, loading: false})
  }

  render() {
    const { artists, loading } = this.state;
    return (
      <section className="section-top-artists">
          <h2>Os 3 artistas mais ouvidos</h2>
          <div>
            <div className="box-cards-artists">
              {
                loading ? <p>Carregando...</p> : (
                    artists.map(({ name, images}, index) => (
                        index < 3 ? 
                        <Card 
                        key={ name }
                        name={ `${index + 1} - ${name}` }
                        url={ images[1].url }
                        index={ index }
                        />
                        : false
                    ))
                )
              }
            </div>
            <div className="info-card">
              <p>Essa lista tem como base os últimos <span>6 meses</span>,  entre aqui e veja também as mais tocadas desde de sempre ou do mês</p>
              <button>Ver lista completa</button>
            </div>
          </div>
      </section>
    )
  }
}

export default Top10Artists