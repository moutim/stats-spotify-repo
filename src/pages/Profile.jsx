import React, { Component } from 'react';
import AboutStats from '../components/AboutStats';
import Top3Artists from '../components/Top3Artists';
import Top3Musics from '../components/Top3Musics';
import './Profile.css';

class Profile extends Component {
  render() {
    console.log(this.props);
    return (
      <>
      <main className="main-general">
        <AboutStats />
        <Top3Artists />
        <Top3Musics />
      </main>
      </>
    )
  }
}

export default Profile;