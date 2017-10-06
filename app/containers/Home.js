import React, {Component} from 'react';
import Header from "../components/Header/Header";
import {Container} from "./HomeStyles";
import Footer from "../components/Footer/Footer";
import Animation from "../components/Animation2/Animation";
import Menu from "../components/Menu/Menu";


class Home extends React.Component{
  render(){
    return(
        <Container>
            
            <Animation/>
            
        </Container>    
    )
  }
}
module.exports = Home;