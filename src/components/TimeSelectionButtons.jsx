import React, { Component } from 'react';
import './TimeSelectionButtons.css';

class TimeSelectionButtons extends Component {
    render() {
    const { handleSelectTime } = this.props;
    return (
        <div className="box-buttons">
          <button onClick={ handleSelectTime } id="short">Um Mês</button>
          <button onClick={ handleSelectTime } id="medium" autoFocus>Seis Meses</button>
          <button onClick={ handleSelectTime } id="long">Desde o início</button>
        </div>
    )
}
}

export default TimeSelectionButtons