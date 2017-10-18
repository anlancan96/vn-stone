import React, {Component} from 'react';
import {MenuFooter,MenuFooterLeft,Ul,Li,BoxArea,
        BoxContent,A,CompanyName,P,InfofooterTitle,FooterBot,Column,Column2} from "./FooterStyles.js";
import {connect} from 'react-redux';

class Footer extends React.Component{
    render(){
        const {whatLanguage} = this.props;
        return(
            <div>
                <MenuFooter>
                    <MenuFooterLeft>
                        <BoxArea>
                            <BoxContent>
                                <Ul>
                                    <Li>
                                        <A href="/">{ whatLanguage === 'en'?"Recruit":"Tuyển dụng"}</A> 
                                    </Li>    
                                    <Li>
                                        <A href="/">{ whatLanguage === 'en' ?"Contact":"Liên hệ"}</A>
                                    </Li>  
                                    <Li>
                                        <A href="/">Forum</A>
                                    </Li>  
                                    <Li>
                                        <A href="/">{ whatLanguage === 'en'?"Web Diagrams":"Sơ đồ trang web"}</A>
                                    </Li>  
                                </Ul>    
                            </BoxContent>    
                        </BoxArea>    
                    </MenuFooterLeft>    
                </MenuFooter>   
                <CompanyName>{ whatLanguage === 'en'?"MH Stone Company":" Công ty MH Stone "}</CompanyName>
                <FooterBot>
                    <Column>
                        <InfofooterTitle>{ whatLanguage === 'en'?"Operating office":"Văn phòng điều hành"}</InfofooterTitle>
                        <P>{this.props.Column1}
                            <br/>
                            {this.props.Column12}
                            <br/>
                            {this.props.Column13}
                            <br/>
                            {this.props.Column14}
                        </P>    
                    </Column>
                   
                    <Column2>
                        <InfofooterTitle>{ whatLanguage === 'en'?"Factory located in Can Tho City":"Xưởng tại thành phố Cần Thơ"}</InfofooterTitle>
                        <P>{this.props.Column41}
                            <br/>
                            {this.props.Column42}
                        </P>    
                    </Column2>
                </FooterBot>    
            </div>    
        );
    }
}

Footer.defaultProps={
    Column1:"6A/15A,Nguyễn Cảnh Chân,phường Nguyễn Cư Trinh,Quận 1,thành phố Hồ Chí Minh",
    Column12:"Mr.Mạnh: 0905102999",
    Column13:"Mr.Hiếu: 0978274294",
    Column14:"Email: hieutran.mh.international@gmail.com",
   
    Column41:"Xưởng Hoàng Sơn:279,Quốc lộ 91B,phường Long Tuyền,quận Bình Thuỷ,thành phố Cần Thơ",
    Column42:""

}

function mapStateToProps(state){
    return {
        whatLanguage : state.whatLanguage,
    }
}

export default connect(mapStateToProps)(Footer);