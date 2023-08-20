import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import RedirectPage from './pages/RedirectPage';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { Provider } from 'react-redux';
import store from './redux/store';
import TopMusics from './pages/TopMusics';
import TopArtists from './pages/TopArtists';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Playlists from './pages/Playlists';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <NavBar />
        <Switch>
          <Route path="/" component={ Login } />
          <Route path="/redirect" component={ RedirectPage }/>
          <Route path="/profile" component={ Profile } />
          <Route path="/musics" component={ TopMusics } />
          <Route path="/artists" component={ TopArtists } />
          <Route path="/playlists" component={ Playlists } />
          <Route path="/*" component={ NotFound } />
        </Switch>
        <Footer />
      </Provider>
    )
  }
}

export default App