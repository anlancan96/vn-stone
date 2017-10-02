import React, {Component} from 'react';
import Header from "./Header";
import {Container} from "../style/Home";
import Footer from "./Footer";
import AnimationBox from "./AnimationBox";

class Home extends React.Component{
  render(){
    return(
        <Container>
            <Footer/>
            <AnimationBox/>
        </Container>    
    )
  }
}
export default Home;