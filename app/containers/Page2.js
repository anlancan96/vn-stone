import React from 'react';
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import {Container} from "./Page2Styles";
import ListOfItemsController from "../components/ListOfItem/ListOfItemsController";

const Page2 = () => {
  return (
    <Container>
      <Header/>
      <Menu/>
      <ListOfItemsController/>
    </Container>
  );
};

module.exports = Page2;
