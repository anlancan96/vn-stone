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
                        </P>    
                    </Column>
                    <Column>
                        <InfofooterTitle>Showroom Vinastone tại Hà Nội</InfofooterTitle>
                        <P>{this.props.Column21}
                            <br/>
                            {this.props.Column22}
                            <br/>
                            {this.props.Column23}
                            <br/>
                            {this.props.Column24}
                        </P>    
                    </Column>
                    <Column>
                        <InfofooterTitle>Chi nhánh tại TP Hồ chí Minh</InfofooterTitle>
                        <P>{this.props.Column31}
                            <br/>
                            {this.props.Column32}
                            <br/>
                            {this.props.Column33}
                        </P>    
                    </Column>
                    <Column>
                        <InfofooterTitle>Mỏ và nhà máy tại Thanh Hóa</InfofooterTitle>
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
    Column1:"Tầng 1, đơn nguyên B, tòa nhà Licogi 13, 164 Khuất Duy Tiến, quận Thanh Xuân, Hà Nội.",
    Column12:"Tel: 024.3 641 32 15",
    Column21:"Tầng 1, tòa nhà Licogi 13, 164 Khuất Duy Tiến, Hà Nội.",
    Column22:"Tel: 024.85876653",
    Column23:"Mobile: 0904 943 356 Email: cuong@vinastone.com",
    Column24:"Giờ mở cửa: 8h30 - 18h00 hàng ngày (Trừ các ngày nghỉ lễ)",
    Column31:"532A đường Lê Trọng Tấn, Phường Tây Thạnh, Quận Tân Phú, TP Hồ Chí Minh.",
    Column32:"Tel: 028.38429502",
    Column33:"Hotline:0904962992",
    Column41:"#1. Xã Hà Long, Huyện Hà Trung, Thanh Hóa (Mosaic & Marble)",
    Column42:"#2. Khu CN Hà Trung, Quốc lộ 217, Hà Trung, Thanh Hóa (Bluestone)"

}

export default Footer;