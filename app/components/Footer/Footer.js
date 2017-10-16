import React, {Component} from 'react';
import {MenuFooter,MenuFooterLeft,Ul,Li,BoxArea,
        BoxContent,A,CompanyName,P,InfofooterTitle,FooterBot,Column} from "./FooterStyles.js";


class Footer extends React.Component{
    render(){
        return(
            <div>
                <MenuFooter>
                    <MenuFooterLeft>
                        <BoxArea>
                            <BoxContent>
                                <Ul>
                                    <Li>
                                        <A href="/">Tuyển dụng</A> 
                                    </Li>    
                                    <Li>
                                        <A href="/">Liên hệ</A>
                                    </Li>  
                                    <Li>
                                        <A href="/">Forum</A>
                                    </Li>  
                                    <Li>
                                        <A href="/">Sơ đồ trang web</A>
                                    </Li>  
                                </Ul>    
                            </BoxContent>    
                        </BoxArea>    
                    </MenuFooterLeft>    
                </MenuFooter>   
                <CompanyName> Công ty MH  Stone </CompanyName>
                <FooterBot>
                    <Column>
                        <InfofooterTitle>Văn phòng điều hành</InfofooterTitle>
                        <P>{this.props.Column1}
                            <br/>
                            {this.props.Column12}
                            <br/>
                            {this.props.Column13}
                        </P>    
                    </Column>
                   
                    <Column>
                        <InfofooterTitle>Xưởng tại thành phố Cần Thơ</InfofooterTitle>
                        <P>{this.props.Column41}
                            <br/>
                            {this.props.Column42}
                        </P>    
                    </Column>
                </FooterBot>    
            </div>    
        );
    }
}

Footer.defaultProps={
    Column1:"6A/15A,Nguyễn Cảnh Chân,phường Nguyễn Cư Trinh,Quận 1,thành phố Hồ Chí Minh",
    Column12:"Mr.Mạnh: 0905102999",
    Column13:"Mr.Hiếu: 0978274294",
   
    Column41:"Xưởng Hoàng Sơn:279,Quốc lộ 91B,phường Long Tuyền,quận Bình Thuỷ,thành phố Cần Thơ",
    Column42:""

}

module.exports = Footer;