import React, { Component } from 'react';
import './Top50.css';
import ItemList from '../components/ItemList';
import { getUserTopArtists } from '../service/endPointsAPI';
import TimeSelectionButtons from '../components/TimeSelectionButtons';
import CardIllustration from '../components/CardIllustration';
import illustration04 from '../images/illustration-04.svg';

class TopArtists extends Component {
  state = {
    artists: [],
    loading: true,
    genres: [],
  }

  async componentDidMount() {
    let arrGenres = [];
    let genres = {};
    const { items } = await getUserTopArtists();
    items.forEach((item) => arrGenres = [...arrGenres, ...item.genres]);
    console.log(items.genres);
    arrGenres.forEach((item) => genres[item] = item);
    this.setState({ artists: items, loading: false, genres: Object.keys(genres) });
  }

  handleSelectTime = async ({ target: { id }}) => {
    this.setState({ loading: true });
    const { items } = await getUserTopArtists(id);
    this.setState({ artists: items, loading: false });
  }

  render() {
    const { artists, loading, genres } = this.state;
    return (
      <>
        <main className="main-general main-top-50">
          <CardIllustration
            title={`Os 50 artistas que você mais escutou estão divididos em ${genres.length} gêneros, entre eles estão:` }
            description={ genres.slice(1, 15).join(', ') }
            url={ illustration04 }
          />
          <article className="top-50">
          <h2>Lista com os 50 artistas que você mais escutou!</h2>
          <TimeSelectionButtons handleSelectTime={ this.handleSelectTime } />
            { loading ? <p>loading...</p> :
              artists.map(({ name, images }, index) => {
                return (
                  <ItemList 
                    key={ name }
                    index={ index + 1}
                    url={ images.length && images[0].url }
                    name={ name }
                    type={'Artista'}
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

export default TopArtists;