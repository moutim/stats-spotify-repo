import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUserTopMusics } from '../service/endPointsAPI';
import Card from './Card';

class Top3Musics extends Component {
  state = {
      musics: [],
      loading: true,
  }
  
  async componentDidMount() {
    const { items } = await getUserTopMusics();
    this.setState({ musics: items, loading: false});
  }

  render() {
    const { musics, loading } = this.state;
    return (
    <section className="section-top">
      <h2>As 3 músicas mais ouvidas nos últimos 6 meses</h2>
      <div>
        <div className="box-cards">
          {
            loading ? <p>Carregando...</p> : (
                musics && musics.map(({ name, album: { images }}, index) => (
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
            <p>Quer ver uma lista completa com <span>50 músicas</span> e mudar o período das estatisticas? Clique no botão abaixo</p>
            <button><Link to="/musics">Ver lista completa</Link></button>
          </div>
      </div>
    </section>
    )
  }
}

export default Top3Musics;