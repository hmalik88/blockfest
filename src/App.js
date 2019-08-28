import React from 'react';
import Home from './containers/Home';
import Rules from './containers/Rules';
import { Route, Switch } from 'react-router-dom';


class App extends React.Component {

  render(){
    return (
    <>
      <Switch>
        <Route exact path="/rules" component={Rules} />
        <Route path='/' component={Home} />
      </Switch>
    </>
  );
  }

}

export default App;
