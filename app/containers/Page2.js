import React from 'react';
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Content from "../components/ContentPage2/Page2";
import {Container} from "./Page2Styles";
const Page2 = () => {
  return (
    <Container>
      <Header/>
      <Menu/>
      <Content/>
    </Container>
  );
};

module.exports = Page2;
