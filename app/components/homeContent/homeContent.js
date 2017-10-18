import React, {Component} from 'react';
import './homeContentStyle.css';
import {connect} from 'react-redux';

class Content extends Component{
    render(){
        const{whatLanguage} = this.props;
        return(
            <div>
                <h1 className="Intro">{ whatLanguage ==='en' ? "Introduction":"Giới thiệu chung"}</h1>
                    <h5 className="h5">{ whatLanguage ==='en'? "Welcome to MH International!":"Chào mừng Quý khách hàng đến với Công ty Trách Nhiệm Hữu Hạn MH International!"}</h5>
                    <p>{ whatLanguage ==='en'?"MH International or MH Stone is one of the leading natural stone exporters and suppliers in VietNam":"MH International hay MHStone là một trong những nhà nhập khẩu và cung cấp hàng đầu Việt Nam về các sản phẩm đá tự nhiên khai thác trong và ngoài nước."}
                    </p>
                    <p>{ whatLanguage === 'en'?"With the pioneer motto in always offering the best solutions for natural stone, Vinastone has been active on human resource, continuous improvement of manufacturing/installation technology to bring customers better and better products, following international quality standards, and professional installation services.":"Với phương châm luôn đi đầu cung cấp các giải pháp về đá tự nhiên tốt nhất cho khách hàng, Vinastone đã và đang chủ động đầu tư về mặt con người, liên tục cải tiến công nghệ sản xuất, thi công để mang tới khách hàng sản phẩm ngày một tốt hơn với chất lượng theo tiêu chuẩn quốc tế và dịch vụ thi công chuyên nghiệp."}</p>
                    <hr/>
                <h5 className="h5">{ whatLanguage === 'en'?"1. BUSINESS ACTIVITIES":"1. HOẠT ĐỘNG KINH DOANH"}</h5>
                    <ul>{ whatLanguage === 'en'?"•	 Provide, construction, construction of civil and state buildings, hotels, restaurants, villas and serviced apartments using natural stone.":"•	Cung cấp, thi công, xây dựng các công trình dân dụng và nhà nước, khách sạn, nhà hàng, biệt thự và căn hộ dịch vụ sử dụng đá tự nhiên. "}</ul>
                    <ul>{ whatLanguage === 'en'?"•	To distribute/ export finished and semi-finished stone products for domestic Vietnam market, countries of Europe, America, Japan and Australia ":"•	Phân phối đá thành phẩm/bán thành phẩm cho toàn bộ thị trường Việt Nam"}</ul>
                    <ul>{ whatLanguage === 'en'?"•	To maintain/ care natural stone before and after installation  ": "•	Bảo dưỡng/chăm sóc đá tự nhiên trước và sau thi công"} </ul>
                <h5 className="h5">{ whatLanguage === 'en'?"2. PRODUCTS AND SERVICES":"2. SẢN PHẨM VÀ DỊCH VỤ"}</h5>
                    <ul>{ whatLanguage === 'en'?"•	Providing material: marble, granite, basalt, bluestone that is quarried locally and imported as finished/ semi-finished/ specified/ cut-to-size products.":"•	Cung cấp vật liệu đá tự nhiên là Marble, Granite…được khai thác trong nước và nhập khẩu dưới dạng thành phẩm/bán thành phẩm/đá qui cách/đá cắt theo yêu cầu."}</ul>
                    <ul>{ whatLanguage === 'en'?"•	Manufacturing/ processing service, following customer’s requirement and material":"•	Dịch vụ gia công/sản xuất đá theo yêu cầu và vật liệu của khách hàng"}</ul>
                    <ul>{ whatLanguage === 'en'?"•	Installation service for building/ project using natural stone":"•	Dịch vụ thi công cho các công trình sử dụng đá tự nhiên."} </ul>
                    <ul>{ whatLanguage === 'en'?"•	Maintenance/ stonecare service for natural stone before and after installation":"•	Dịch vụ chăm sóc/bảo dưỡng đá tự nhiên trước và sau thi công"}</ul>
                    <ul>{ whatLanguage === 'en'?"•	Total package from provide material to completion installation":"•	Cung cấp vật liệu và thi công hoàn thiện công trình"}</ul>
                <h5 className="h5">{ whatLanguage === 'en'?"3. TARGETED CUSTOMERS":"3. KHÁCH HÀNG MỤC TIÊU"}</h5>   
                    <ul>{ whatLanguage === 'en'?"•	Dealers: The importers/ distributors of natural stone and constructive material":"•	Các nhà nhập khẩu/phân phối đá tự nhiên và vật liệu xây dựng"}</ul>
                    <ul>{ whatLanguage === 'en'?"•	Contractor of natural stone":"•	Các nhà thầu thi công đá tự nhiên"} </ul>
                    <ul>{ whatLanguage === 'en'?"•	Commercial project: Hotel/ Office Building/ Commercial Center/ Apartment…":"•	Các chủ đầu tư dự án, đơn vị tư vấn giám sát, kiến trúc sư."}</ul>
                    <ul>{ whatLanguage === 'en'?"•	Individual household: Villa/ Penthouse…":"•	Các khách hàng cá nhân"}</ul>
                <h5 className="h5">{ whatLanguage === 'en'?"4. PROJECT REFERENCES":"4. DỰ ÁN THỰC HIỆN"}</h5>
                    <ul>{ whatLanguage === 'en'?"•	Hotel/ resort/ golf":"•	Khách sạn/Resort/ Sân golf"}</ul>
                    <ul>{ whatLanguage === 'en'?"•	Office Building":"•	Văn phòng   "}</ul>
                    <ul>{ whatLanguage === 'en'?"•	Convention center/ Commercial center/ Apartment":"•	TT thương mại, chung cư cao cấp"} </ul>
                    <ul>{ whatLanguage === 'en'?"•	Public/ Government Project …":"•	Dự án đầu tư công/chính phủ"}</ul>
                    <ul>{ whatLanguage === 'en'?"•	Villa/Penhouse: Seryna Penthouse, The Manor penthouse, Penhouse Crowne plaza, Villas of Ciputra/ Linh Dam urban area":"•	Villa/Penthouse"}</ul> 

            </div>    
        )
    }
}

function mapStateToProps(state){
    return {
        whatLanguage : state.whatLanguage,
    }
}

export default connect(mapStateToProps)(Content);