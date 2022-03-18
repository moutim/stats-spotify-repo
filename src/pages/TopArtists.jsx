import React, { Component } from 'react';
import HeaderProfile from '../components/HeaderProfile';
import './TopArtists.css';
import ArtistItemList from '../components/ArtistItemList';
import { getUserTopArtists } from '../service/endPointsAPI';
import TimeSelectionButtons from '../components/TimeSelectionButtons';

class TopArtists extends Component {
  state = {
    artists: [],
    loading: true,
  }

  async componentDidMount() {
    const { items } = await getUserTopArtists();
    this.setState({ artists: items, loading: false});
  }

  handleSelectTime = async ({ target: { id }}) => {
    this.setState({ loading: true });
    const { items } = await getUserTopArtists(id);
    this.setState({ artists: items, loading: false });
  }

  render() {
    const { artists, loading } = this.state;
    return (
      <>
        <HeaderProfile />
        <main>
          <article className="top-artists">
          <h2>Lista com os 50 artistas que você mais escutou!</h2>
          <TimeSelectionButtons handleSelectTime={ this.handleSelectTime } />
            { loading ? <p>loading...</p> :
              artists.map(({ name, images }, index) => {
                const { url } = images[0];
                return (
                  <ArtistItemList key={ name } index={ index + 1} url={ url } name={ name } />
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