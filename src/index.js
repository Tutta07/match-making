import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Bases from './components/menu/bases';
import Match from './components/menu/match';
import NotFound from './components/menu/notfound';
//import Home from './components/menu/home';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      
      <Route path='/' exact={true} component={App}/>
      <Route path='/home' exact={true} component={App}/>
      <Route path='/bases' component={Bases}/>
      <Route path='/match' component={Match}/>
      <Route  component={NotFound}/>
    </Switch>
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
