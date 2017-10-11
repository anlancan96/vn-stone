import React,{Component} from 'react';
import {Link} from 'react-router-dom';


export default class PageNotFound extends Component {
  render(){
    return (
      <div>
        <h1>
          Page not found!
          <Link to="/"><button>Click me</button></Link>
        </h1>
      </div>
    );
  }
}
  



