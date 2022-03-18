import React, { Component } from 'react';
import HeaderProfile from '../components/HeaderProfile';
import AboutStats from '../components/AboutStats';
import Top3Artists from '../components/Top3Artists';
import Top3Musics from '../components/Top3Musics';

class Profile extends Component {
  render() {
    console.log(this.props);
    return (
      <>
      <HeaderProfile />
      <main>
        <AboutStats />
        <Top3Artists />
        <Top3Musics />
      </main>
      </>
    )
  }
}

export default Profile;