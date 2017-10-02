import styled from 'styled-components';


export const Head = styled.div`
font-family: Arial, Helvetica, sans-serif;
`;

export const TopHeader = styled.div`

 clear:both;
 width:100%;
 position:static;
`;

export const A = styled.a`
  text-decoration: none;
  color: #666666
  cursor: pointer;
`;

export const Contact = styled.div`
 position: absolute;
 right: 270px;
 color: #666666;
 display: block;
 text-decoration: none;
 font-size: 12px;
`;

export const Ul = styled.ul`
    padding: 0px;
    margin: 0px;
    display: block;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px; 
    -webkit-margin-end: 0px;
    float: left;
    list-style: none;
`;

export const Li = styled.li`
    padding-right: 20px;
    position: relative;
    display: list-item;
    text-align: -webkit-match-parent;
`;

export const ImgIcon = styled.img`
    padding-right: 5px;
    position: relative;
     width: 18px;
     height: 18px;
     top: 5px;
`;

export const Search = styled.div`
   position: absolute;
   right: 69px;
   width: 201px;
   z-index: 15;
   display: block;
`;

export const ButtonSearch = styled.div`
    position: absolute;
    right: 0px;
    width: 28px;
    height: 14px;
    border-left: 1px solid #ce9d00;
    cursor: pointer;
    margin: 5px 0px;
`;

export const SearchInput = styled.input`
    background: #FFF;
    padding: 1px 32px 1px 5px;
    width: 121px;
    height: 17px;
    display: inline-block;
    border: 1px solid #ce9d00;
    color: #666;
    font-size: 11px;
`;

export const ImgSearch = styled.img`
    left: 8px;
    position: absolute;
`;

export const Logo = styled.div`
    position: absolute;
    top: 51px;
    left: 50%;
`;

export const ImgLogo = styled.img`
    cursor: pointer;
    border: none;   
`;