import React from 'react';
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import {Container} from "./HomeStyles";
import ListOfItemsController from "../components/ListOfItem/ListOfItemsController";
import Footer from "../components/Footer/Footer";
const Page2 = () => {
  return (
    <Container>
      <Header/>
      <Menu/>
      <ListOfItemsController/>
      <Footer/>
    </Container>
  );
};

module.exports = Page2;
