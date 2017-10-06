import React, {Component} from 'react';
import Header from "../components/Header/Header";
import {Container} from "./HomeStyles";
import Footer from "../components/Footer/Footer";
import Animation from "../components/Animation2/Animation";
import Louver from "../components/AnimationBox/AnimationBox";
import Menu from "../components/Menu/Menu";


class Home extends React.Component{
  render(){
    return(
        <Container>
            <Menu/>
            <Louver/>
            <Footer/>
        </Container>    
    )
  }
}
module.exports = Home;