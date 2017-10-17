import React,{Component} from 'react';
import Header from "../components/Header/Header";
import {Container} from "./HomeStyles";
import Footer from "../components/Footer/Footer";
import Menu from "../components/Menu/Menu";
import SearchController from "../components/Header/SearchController";

export default class SearchInterface extends Component{
    render(){
        return (
        <Container>
            <Header/>
            <Menu/>
            <SearchController/>
            <Footer/>          
        </Container>
        )
    }
}