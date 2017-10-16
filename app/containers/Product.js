import React, {Component} from 'react';
import Header from "../components/Header/Header";
import {Container} from "./HomeStyles";
import Footer from "../components/Footer/Footer";
import Louver from "../components/AnimationBox/AnimationBox";
import Menu from "../components/Menu/Menu";
import ItemController from "../components/item/itemController";

class Home extends React.Component{
  render(){
    return(
        <Container>
            <Header/>
            <Menu/>
            <ItemController/>
            <Footer/>          
        </Container>    
    )
  }
}
module.exports = Home;