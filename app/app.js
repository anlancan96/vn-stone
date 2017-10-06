import React from'react';
import ReactDOM from'react-dom';
import {BrowserRouter,Route,Switch} from'react-router-dom';
import Home from './containers/Home';
import PageNotFound from './containers/PageNotFound';
import { Link } from 'react-router-dom';

ReactDOM.render((
  <BrowserRouter>
    <Switch>
        <Route path="/a" component={PageNotFound} />
        <Route path="/" component={Home} />
     
    </Switch>
    </BrowserRouter>
  ), document.getElementById('root'));