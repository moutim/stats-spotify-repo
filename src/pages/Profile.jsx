import React, { Component } from 'react';
import HeaderProfile from '../components/HeaderProfile';
import AboutStats from '../components/AboutStats';

class Profile extends Component {
  

  render() {
    return (
      <>
      <HeaderProfile />
      <main>
        <AboutStats />
      </main>
      </>
    )
  }
}

export default Profile