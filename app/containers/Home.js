import React, {Component} from 'react';
import Header from "../components/Header/Header";
import {Container} from "./HomeStyles";
import Footer from "../components/Footer/Footer";
import Louver from "../components/AnimationBox/AnimationBox";
import Menu from "../components/Menu/Menu";
import HomeContent from "../components/homeContent/homeContent";

class Home extends React.Component{
  render(){
    return(
        <Container>
            <Header/>
            <Menu/>
            <Louver/>
            <HomeContent/>
            <Footer/>          
        </Container>    
    )
  }
}
module.exports = Home;