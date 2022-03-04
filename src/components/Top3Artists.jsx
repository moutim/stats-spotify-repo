import React, { Component } from 'react';
import './Top3.css';
import { getUserTopArtists } from '../service/endPointsAPI';
import Card from './Card';
import { connect } from 'react-redux';
import { sendArrayTopArtists } from '../redux/actions';

class Top3Artists extends Component {
  state = {
    artists: [],
    loading: true,
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    const { items } = await getUserTopArtists();
    this.setState({ artists: items, loading: false});
    dispatch(sendArrayTopArtists('MEDIUM', items ));
  }

  render() {
    const { artists, loading } = this.state;
    console.log(this.props);
    return (
      <section className="section-top">
          <h2>Os 3 artistas mais ouvidos</h2>
          <div>
            <div className="box-cards">
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

export default connect()(Top3Artists)