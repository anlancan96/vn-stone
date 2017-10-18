import React,{Component} from 'react';
import './item.css';
import {connect} from 'react-redux';

class Item extends Component {
    render(){
        const{whatLanguage} = this.props;
        return(
            <div >
                {this.props.item.map((s,index) =>{
                    let link = "listStone?type=" + s.type;
                    return( 
                    <div  key={index} >  
                    <div className="breadcrum">
                        <a href="/">{whatLanguage === 'en' ? "Home":"Trang chủ"}</a>   
                        » 
                        <a href={link}>{s.Origin} {whatLanguage === 'en'?"Stone":"Đá"}</a> 
                        » 
                        <a href="/">{whatLanguage === 'en' ? "Home":"Trang chủ"}</a> 
                    </div>        
                    <div className="Container">
                       
                        <img id= "mainImg" src={s.src} />
                        <div className="Info">
                        <h1>{ whatLanguage === 'en'?"Natural Stone":"Đá tự nhiên"} {s.description}</h1>
                        <div className="item">
                            <img src="shop.png" />
                            <p id="state">{whatLanguage === 'en'?"Stocking":"Còn hàng"}</p>
                        </div>  
                        <div className="item">
                            <img src="price.png"/>
                            <p>{ whatLanguage === 'en'?"Price: Contact":"Giá: Liên hệ"}</p>
                        </div>   
                        <p>Mr.Mạnh: 0905102999 </p>
                        <p>Mr.Hiếu: 0978274294</p>
                        <div className="item">
                            <img src="origin.png" />
                            <p>{ whatLanguage === 'en'?"Made in:":"Xuất xứ:"} {s.Origin} </p>
                        </div>  
                        <div className="item">
                            <img src="star.png" />
                            <p>{ whatLanguage === 'en'?"Natural Stone":"Đá tự nhiên"}</p>
                        </div> 
                        
                        
                        
                        </div>   
                    </div>   
                    </div> 
                    )
                 })
                }
               
               
            </div>    
        )
    }
}

function mapStateToProps(state){
    return {
        whatLanguage : state.whatLanguage,
    }
}

export default connect(mapStateToProps)(Item);