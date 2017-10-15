import React from 'react';
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import {Container} from "./Page2Styles";
import ListOfItem from "../components/ListOfItem/ListOfItem";

const Page2 = () => {
  return (
    <Container>
      <Header/>
      <Menu/>
      <ListOfItem/>
    </Container>
  );
};

module.exports = Page2;
