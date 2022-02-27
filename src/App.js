import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import RedirectPage from './pages/RedirectPage';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/redirect" component={ RedirectPage }/>
        <Route path="/profile" component={ Profile } />
        <Route path="*" component={ NotFound } />
      </Switch>
    )
  }
}

export default App