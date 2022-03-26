import React, { Component } from 'react'

class ItemList extends Component {
  render() {
    const { url, name, index, type } = this.props;
    return (
      <div>
          <figure>
              <img src={ url } alt={ name } />
              <div>
              <figcaption className="name-item">{ `${index} - ${name}` }</figcaption>
              <figcaption>{ type }</figcaption>
              </div>
          </figure>
      </div>
    )
  }
}

export default ItemList;