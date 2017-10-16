import React, {Component} from 'react';
import './homeContentStyle.css';
class Content extends Component{
    render(){
        return(
            <div>
                <h1 className="Intro">Giới thiệu chung</h1>
                    <h5 className="h5">Chào mừng Quý khách hàng đến với Công ty Trách Nhiệm Hữu Hạn MH International!</h5>
                    <p>MH International hay MHStone là một trong những nhà nhập khẩu và cung cấp hàng đầu Việt Nam về các sản phẩm đá tự nhiên khai thác trong và ngoài nước.
                    </p>
                    <p>Với phương châm luôn đi đầu cung cấp các giải pháp về đá tự nhiên tốt nhất cho khách hàng, Vinastone đã và đang chủ động đầu tư về mặt con người, liên tục cải tiến công nghệ sản xuất, thi công để mang tới khách hàng sản phẩm ngày một tốt hơn với chất lượng theo tiêu chuẩn quốc tế và dịch vụ thi công chuyên nghiệp.</p>
                    <hr/>
                <h5 className="h5">1. HOẠT ĐỘNG KINH DOANH</h5>
                    <ul>•	Cung cấp, thi công, xây dựng các công trình dân dụng và nhà nước, khách sạn, nhà hàng, biệt thự và căn hộ dịch vụ sử dụng đá tự nhiên. </ul>
                    <ul>•	Phân phối đá thành phẩm/bán thành phẩm cho toàn bộ thị trường Việt Nam</ul>
                    <ul>•	Bảo dưỡng/chăm sóc đá tự nhiên trước và sau thi công </ul>
                <h5 className="h5">2. SẢN PHẨM VÀ DỊCH VỤ</h5>
                    <ul>•	Cung cấp vật liệu đá tự nhiên là Marble, Granite…được khai thác trong nước và nhập khẩu dưới dạng thành phẩm/bán thành phẩm/đá qui cách/đá cắt theo yêu cầu.</ul>
                    <ul>•	Dịch vụ gia công/sản xuất đá theo yêu cầu và vật liệu của khách hàng</ul>
                    <ul>•	Dịch vụ thi công cho các công trình sử dụng đá tự nhiên. </ul>
                    <ul>•	Dịch vụ chăm sóc/bảo dưỡng đá tự nhiên trước và sau thi công</ul>
                    <ul>•	Cung cấp vật liệu và thi công hoàn thiện công trình</ul>
                <h5 className="h5">3. KHÁCH HÀNG MỤC TIÊU</h5>   
                    <ul>•	Các nhà nhập khẩu/phân phối đá tự nhiên và vật liệu xây dựng</ul>
                    <ul>•	Các nhà thầu thi công đá tự nhiên </ul>
                    <ul>•	Các chủ đầu tư dự án, đơn vị tư vấn giám sát, kiến trúc sư.</ul>
                    <ul>•	Các khách hàng cá nhân</ul>
                <h5 className="h5">4. DỰ ÁN THỰC HIỆN</h5>
                    <ul>•	Khách sạn/Resort/ Sân golf</ul>
                    <ul>•	Văn phòng   </ul>
                    <ul>•	TT thương mại, chung cư cao cấp </ul>
                    <ul>•	Dự án đầu tư công/chính phủ</ul>
                    <ul>•	Villa/Penthouse</ul> 

            </div>    
        )
    }
}

export default Content;