import React from 'react';
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import {Container} from "./HomeStyles";
import OptionContent from "../components/Option/OptionController";
import Footer from "../components/Footer/Footer";
const Option = () => {
  return (
    <Container>
      <Header/>
      <Menu/>
      <OptionContent/>
      <Footer/>
    </Container>
  );
};

module.exports = Option;
