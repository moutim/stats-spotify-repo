import React, { Component } from 'react';
import HeaderProfile from '../components/HeaderProfile';
import AboutStats from '../components/AboutStats';
import Top10Artists from '../components/Top10Artists';
import Top10Musics from '../components/Top10Musics';

class Profile extends Component {
  

  render() {
    return (
      <>
      <HeaderProfile />
      <main>
        <AboutStats />
        <Top10Artists />
        <Top10Musics />
      </main>
      </>
    )
  }
}

export default Profile