import React, {Component} from 'react';
import Header from "../components/Header/Header";
import {Container} from "./HomeStyles";
import Footer from "../components/Footer/Footer";
import Louver from "../components/AnimationBox/AnimationBox";
import Menu from "../components/Menu/Menu";
import Item from "../components/item/Item";

class Home extends React.Component{
  render(){
    return(
        <Container>
            <Header/>
            <Menu/>
            <Item/>
            <Footer/>          
        </Container>    
    )
  }
}
module.exports = Home;