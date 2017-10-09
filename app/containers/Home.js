import React, {Component} from 'react';
import Header from "../components/Header/Header";
import {Container} from "./HomeStyles";
import Footer from "../components/Footer/Footer";
import Louver from "../components/AnimationBox/AnimationBox";
import Menu from "../components/Menu/Menu";
import ListItem from "../components/ListItem/ListItem";

class Home extends React.Component{
  render(){
    return(
        <Container>
            <ListItem/>          
        </Container>    
    )
  }
}
module.exports = Home;