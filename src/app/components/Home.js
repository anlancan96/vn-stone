import React, {Component} from 'react';
import Header from "./Header/Header";
import {Container} from "./HomeStyles";
import Footer from "./Footer/Footer";
import AnimationBox from "./AnimationBox/AnimationBox";
import Menu from "./Menu/Menu";


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