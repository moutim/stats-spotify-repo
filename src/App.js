import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import RedirectPage from './pages/RedirectPage';
import Profile from './pages/Profile'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/redirect" component={ RedirectPage }/>
        <Route path="/profile" component={ Profile } />
      </Switch>
    )
  }
}

export default App