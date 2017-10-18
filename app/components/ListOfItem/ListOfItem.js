import React,{Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './ListOfItem.css';
import {connect} from 'react-redux';

class ListOfItem extends Component {
    render(){
        const {whatLanguage} = this.props;
        const ex = this.props.item[0];
        return (
            <div>
            <div className="breadcrum">
                <a href="/">{whatLanguage === 'en' ? "Home":"Trang chủ"}</a>   
                » 
                <a href="/">{whatLanguage === 'en'?ex.Origin + " Stone":"Đá " + ex.OriginVn}</a> 
                » 
                <a href="/">{whatLanguage === 'en' ? ex.optionEn:ex.optionVn}</a> 
            </div>   
            <div className="main main-raised">
                <div className="blog-post">
                    <div className="container">
                        <article id="post-224" className="section section-text">
                            <div className="row">
                                <div className="content-full col-md-12">
                                    <ul className="products">
                                        {this.props.item.map((s,index)=>{
                                            let link = "product?id=" + s.id;
                                            return(
                                                <li className="product type-product" key={index}>
                                                    <div className="card card-product">
                                                        <div className="card-image">
                                                            <a>
                                                            <img style={{width:'230px',height:'350px'}} src={s.src} className="attachment-hestia-shop size-hestia-show"/>
                                                            </a>
                                                        </div>
                                                        <div className="content">
                                                            <h6 className="category"><img src="origin.png" style={{width: '20px',height: '20px'}}/><a>{whatLanguage === 'en'?s.optionEn:s.optionVn}</a></h6>
                                                            <h4 className="card-title">
                                                                <a href={link} className="shop-item-title-link">{s.description}</a>
                                                            </h4>
                                                            <div className="footer">
                                                                <div className="price">
                                                                    <h4>
                                                                        <span className="woocommerce-Price-amount amount">
                                                                            <span className="woocommerce-Price-currencySymbol"><img src="shop.png" style={{width: '20px',height: '20px'}} /></span>
                                                                            {whatLanguage === 'en' ? "   Stocking" : "   Còn hàng"}
                                                                        </span>
                                                                    </h4>
                                                                    <h4>
                                                                        <span className="woocommerce-Price-amount amount">
                                                                            <span className="woocommerce-Price-currencySymbol"><img src="price.png" style={{width: '20px',height: '20px'}}/>{whatLanguage === 'en' ? "  Price:" : "  Giá:"}</span>
                                                                            {whatLanguage === 'en' ? " Contact" : " Liên hệ"}
                                                                        </span>
                                                                    </h4>
                                                                    <h4>
                                                                        <span className="woocommerce-Price-amount amount">
                                                                            <span className="woocommerce-Price-currencySymbol"><img src="phone.png" style={{width: '20px',height: '20px'}} /></span>
                                                                            {whatLanguage === 'en' ? "  Mr.Mạnh: 0905102999 " : "  Mr.Mạnh: 0905102999 "}
                                                                        </span>
                                                                    </h4>
                                                                    <h4>
                                                                        <span className="woocommerce-Price-amount amount">
                                                                            <span className="woocommerce-Price-currencySymbol"><img src="phone.png" style={{width: '20px',height: '20px'}} /></span>
                                                                            {whatLanguage === 'en' ? "  Mr.Hiếu: 0978274294" : "  Mr.Hiếu: 0978274294"}
                                                                        </span>
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        }
                                        )}     
                                    </ul>               
                                </div>
                            </div>
                        </article>
                    </div>                    
                </div>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        whatLanguage : state.whatLanguage,
    }
}

export default connect(mapStateToProps)(ListOfItem);