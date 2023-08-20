import React, { Component } from 'react';
import './Top3.css';
import { getUserTopArtists } from '../service/endPointsAPI';
import Card from './Card';
import { Link } from 'react-router-dom';

class Top3Artists extends Component {
  state = {
    artists: [],
    loading: true,
  }

  async componentDidMount() {
    const { items } = await getUserTopArtists();
    this.setState({ artists: items, loading: false});
  }

  render() {
    const { artists, loading } = this.state;
    return (
      <section className="section-top">
          <h2>Os 3 artistas mais tocados nos últimos 6 meses</h2>
          <div>
            <div className="box-cards">
              {
                loading ? <p>Carregando...</p> : (
                    artists && artists.map(({ name, images}, index) => (
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
            <p>Quer ver uma lista completa com <span>50 artistas</span> e mudar o período das estatisticas? Clique no botão abaixo</p>
              <button><Link to="/artists" >Ver lista completa</Link></button>
            </div>
          </div>
      </section>
    )
  }
}

export default Top3Artists;