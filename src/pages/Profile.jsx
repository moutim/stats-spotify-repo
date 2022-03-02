import React, { Component } from 'react';
import HeaderProfile from '../components/HeaderProfile';
import AboutStats from '../components/AboutStats';
import Top10Artists from '../components/Top10Artists';

class Profile extends Component {
  

  render() {
    return (
      <>
      <HeaderProfile />
      <main>
        <AboutStats />
        <Top10Artists />
      </main>
      </>
    )
  }
}

export default Profile