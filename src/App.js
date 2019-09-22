import React from 'react';
import Home from './containers/Home';
import Rules from './containers/Rules';
import './normalize.css';
import './scss/App.scss';
import { Route, Switch, withRouter } from 'react-router-dom';


class App extends React.Component {

  render(){
    return (
    <>
      <Switch>
        <Route exact path="/rules" component={Rules} />
        <Route exact path='/' component={Home} />
      </Switch>
    </>
  );
  }

}

export default withRouter(App);
