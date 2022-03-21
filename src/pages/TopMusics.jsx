import React, { Component } from 'react';
import './Top50.css';
import ItemList from '../components/ItemList';
import { getUserTopMusics } from '../service/endPointsAPI';
import TimeSelectionButtons from '../components/TimeSelectionButtons';

class TopMusics extends Component {
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
      <>
        <main>
          <article className="top-artists">
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