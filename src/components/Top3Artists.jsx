import React, { Component } from 'react';
import './Top3.css';
import { getUserTopArtists } from '../service/endPointsAPI';
import Card from './Card';
import { connect } from 'react-redux';
import { sendArrayTopArtists } from '../redux/actions';
import { Redirect } from 'react-router-dom';
import TimeSelectionButtons from '../components/TimeSelectionButtons';

class Top3Artists extends Component {
  state = {
    artists: [],
    loading: true,
    redirect: false,
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    const { items } = await getUserTopArtists();
    this.setState({ artists: items, loading: false});
    dispatch(sendArrayTopArtists('MEDIUM', items ));
  }

  handleSelectTime = async ({ target: { id }}) => {
    this.setState({ loading: true });
    const { items } = await getUserTopArtists(id);
    this.setState({ artists: items, loading: false });
  }

  redirectUserToPage = () => this.setState({ redirect: true });

  render() {
    const { artists, loading, redirect } = this.state;
    return (
      <section className="section-top">
        { redirect && <Redirect to="/artists" /> }
          <h2>Os 3 artistas mais ouvidos</h2>
          <TimeSelectionButtons handleSelectTime={ this.handleSelectTime } />
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
              <button onClick={ this.redirectUserToPage }>Ver lista completa</button>
            </div>
          </div>
      </section>
    )
  }
}

export default connect()(Top3Artists)