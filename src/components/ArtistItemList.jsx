import React, { Component } from 'react'

class ArtistItemList extends Component {
  render() {
    const { url, name, index } = this.props;
    return (
      <div>
          <figure>
              <img src={ url } alt={ name } />
              <figcaption>
                <span>{ `${index} - ${name}` }</span>
                <br />
                {'Artista'}
              </figcaption> 
          </figure>
      </div>
    )
  }
}

export default ArtistItemList;