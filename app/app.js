import React from'react';
import ReactDOM from'react-dom';
import {BrowserRouter,Route} from'react-router-dom';
import Home from './containers/Home';
import PageNotFound from './containers/PageNotFound';
import { Link } from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
      <div>
        <Route path="/" component={Home} />
        <Route path="/" component={PageNotFound}/>
      </div>  
    </BrowserRouter>
  ), document.getElementById('root'));