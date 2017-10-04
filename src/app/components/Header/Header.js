import React, {Component} from 'react';
import {A,TopHeader,Contact,Ul,Li,ImgIcon,Head,
    Search,SearchInput,ButtonSearch,ImgSearch,
    Logo,ImgLogo} from "./HeaderStyles.js";

class Header extends React.Component{
    
  render(){
    return(
       <Head>
            <TopHeader>
                <Contact>
                    <Ul>
                       <Li>
                           <A href={this.props.link}>
                           <ImgIcon alt=""  src={this.props.srcIcon1}/>
                           MH Internal Co,Ltd
                           </A>     
                       </Li>     
                    </Ul>
                    <Ul>
                       <Li>
                           <ImgIcon alt=""  src={this.props.srcIcon2}/>
                           Hotline: 024.36422489
                       </Li>     
                    </Ul>
                    <Ul>
                       <Li>
                           <ImgIcon alt=""  src={this.props.srcIcon3}/>
                           /
                           <ImgIcon alt=""  src={this.props.srcIcon4}/>
                           MHStone_suport
                       </Li>     
                    </Ul>      
                </Contact>   
                <Search>
                    <ButtonSearch>
                       <ImgSearch src={this.props.srcIcon5}/>
                    </ButtonSearch>    
                    <SearchInput/>
                </Search>     
                <Logo>
                    <A href="/"/>
                    <ImgLogo src={this.props.logo}/>
                </Logo>    
            </TopHeader>    
        </Head>    
    )
  }
}

Header.defaultProps={
    link:"/",
    srcIcon1:'http://vinastone.com/image/data/Logo.png',
    srcIcon2:"http://vinastone.com/image/data/vinastone/Flickr/phoneicon.png",
    srcIcon3:"http://vinastone.com/image/data/vinastone/Flickr/skypeicon.png",
    srcIcon4:"http://vinastone.com/image/data/vinastone/Flickr/yahooicon.png",
    srcIcon5:"http://vinastone.com/catalog/view/theme/vinastone/image/button-search.png",
    logo:"http://vinastone.com/image/data/Logo_1.png"
}
export default Header;