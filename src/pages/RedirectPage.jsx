import React, { Component } from 'react';
import './RedirectPage.css';
import { Redirect } from 'react-router-dom';
import { getAcessToken } from '../service/getAcessToken';
import RedirectLoader from '../components/RedirectLoader';

class RedirectPage extends Component {
  state = {
    redirect: false,
  }

  componentDidMount(){
    getAcessToken();
    // this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;
    return (
      <>
      { redirect ? <Redirect to="/stats-spotify-repo/profile" /> : false}
      <h1>kaka</h1>
      <RedirectLoader />
      </>
    )
  }
}

export default RedirectPage