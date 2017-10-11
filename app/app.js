import React from'react';
import ReactDOM from'react-dom';
import {BrowserRouter,Route,Switch} from'react-router-dom';
import Home from './containers/Home';
import PageNotFound from './containers/PageNotFound';
import { Link } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import Page2 from './containers/Page2';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
          <Route path="/ChinaStone" component={Page2} />
          <Route path="/" component={Home} />
      
      </Switch>
    </BrowserRouter>
  </Provider>
  ), document.getElementById('root'));

