import React from'react';
import ReactDOM from'react-dom';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Home from './containers/Home';
import PageNotFound from './containers/PageNotFound';
import { Link } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import Page2 from './containers/Page2';
import Product from './containers/Product';
import SearchInterface from './containers/SearchInterface';

ReactDOM.render((
  <Provider store={store}>
     <BrowserRouter>
      <Switch>
          <Route path="/listStone" component={Page2} />
          <Route path="/product" component={Product} />
          <Route path="/search" component={SearchInterface}/> 
          <Route path="/" component={Home} />     
      </Switch>
    </BrowserRouter>  
  </Provider>
  ), document.getElementById('root'));

