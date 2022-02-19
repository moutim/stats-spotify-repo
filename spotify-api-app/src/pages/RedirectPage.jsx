import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getAcessToken } from '../service/getAcessToken';

class RedirectPage extends Component {
  state = {
    redirect: false,
  }

  componentDidMount(){
    getAcessToken();
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;
    return (
      <>
      { redirect ? <Redirect to="/profile" /> : false}
      <div>RedirectPage</div>
      </>
    )
  }
}

export default RedirectPage