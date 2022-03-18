import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { getUserTopMusics } from '../service/endPointsAPI';
import Card from './Card';
import TimeSelectionButtons from './TimeSelectionButtons';

class Top3Musics extends Component {
  state = {
      musics: [],
      loading: true,
  }
  
  async componentDidMount() {
    const { items } = await getUserTopMusics();
    this.setState({ musics: items, loading: false});
  }

  handleSelectTime = async ({ target: { id }}) => {
    this.setState({ loading: true });
    const { items } = await getUserTopMusics(id);
    this.setState({ musics: items, loading: false });
  }

  render() {
    const { musics, loading } = this.state;
    return (
    <section className="section-top">
      <h2>As 3 músicas mais ouvidas</h2>
      <TimeSelectionButtons handleSelectTime={ this.handleSelectTime } />
      <div>
        <div className="box-cards">
          {
            loading ? <p>Carregando...</p> : (
                musics.map(({ name, album: { images }}, index) => (
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
            <button><Link to="/musics">Ver lista completa</Link></button>
          </div>
      </div>
    </section>
    )
  }
}

export default Top3Musics;