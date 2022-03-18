import React, { Component } from 'react'

class ItemList extends Component {
  render() {
    const { url, name, index, type } = this.props;
    return (
      <div>
          <figure>
              <img src={ url } alt={ name } />
              <figcaption>
                <span>{ `${index} - ${name}` }</span>
                <br />
                { type }
              </figcaption> 
          </figure>
      </div>
    )
  }
}

export default ItemList;