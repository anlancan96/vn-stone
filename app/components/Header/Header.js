import React, {Component} from 'react';
import {A,TopHeader,Contact,Ul,Li,ImgIcon,Head,
    Search,SearchInput,ButtonSearch,ImgSearch,
    Logo,ImgLogo,H} from "./HeaderStyles.js";
import $ from 'jquery';
import {Link} from 'react-router-dom';
class Header extends React.Component{
    componentDidMount(){
       
        $('.key').keypress(function(e){
            var value = $(this).val();
            let link = "/search?data=" + value;
            if(e.keyCode == 13){
                window.location.href = link;
            }
        });
    }
    
    render(){
    return(
       <Head>
            <TopHeader>
                <Contact>
                    <Ul>
                       <Li>
                           <A href={this.props.link}>
                           <ImgIcon alt=""  src={this.props.srcIcon1}/>
                           MH International Co.,Ltd
                           </A>     
                       </Li>     
                    </Ul>
                    <Ul>
                       <Li>
                           <ImgIcon alt=""  src={this.props.srcIcon2}/>
                           Hotline: 0905102999 / 0978274294
                       </Li>     
                    </Ul>    
                </Contact>   
                <Search>
                <Link to={"/a"} id="button"><ButtonSearch>
                       <ImgSearch src={this.props.srcIcon5}/>
                    </ButtonSearch></Link>    
                    <SearchInput className="key"/>
                </Search>     
                <Logo>
                    <A href="/"/>
                    <H>MH International Stone</H>
                </Logo>    
            </TopHeader>    
        </Head>    
    )
  }
}

Header.defaultProps={
    link:"/",
    srcIcon1:'m.png',
    srcIcon2:"phone.png",
    srcIcon3:"http://vinastone.com/image/data/vinastone/Flickr/skypeicon.png",
    srcIcon4:"http://vinastone.com/image/data/vinastone/Flickr/yahooicon.png",
    srcIcon5:"search.png",
    logo:"Logo.png"
}
module.exports = Header;