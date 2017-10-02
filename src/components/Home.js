import React, {Component} from 'react';
import Header from "./Header";
import {Container} from "../style/Home";
import Footer from "./Footer";
import AnimationBox from "./AnimationBox";
import Menu from "./Menu";


class Home extends React.Component{
  render(){
    return(
        <Container>
            <Header/>
            <Menu/>
            <AnimationBox/>
            <Footer/>
        </Container>    
    )
  }
}
export default Home;