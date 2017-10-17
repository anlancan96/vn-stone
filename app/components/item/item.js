import React,{Component} from 'react';
import './item.css';

class Item extends Component {
    render(){
        return(
            <div >
                {this.props.item.map((s,index) =>{
                    return( 
                    <div  key={index} >  
                    <div className="breadcrum">
                        <a href="/">Trang chủ</a>   
                        » 
                        <a href="/">{s.Origin} Stone</a> 
                        » 
                        <a href="/">Trang chủ</a> 
                    </div>        
                    <div className="Container">
                       
                        <img id= "mainImg" src={s.src} />
                        <div className="Info">
                        <h1>Đá tự nhiên {s.description}</h1>
                        <div className="item">
                            <img src="shop.png" />
                            <p id="state"> Còn hàng</p>
                        </div>  
                        <div className="item">
                            <img src="price.png" />
                            <p>Giá: Liên hệ</p>
                        </div>   
                        <p>Mr.Mạnh: 0905102999 </p>
                        <p>Mr.Hiếu: 0978274294</p>
                        <div className="item">
                            <img src="origin.png" />
                            <p>Xuất xứ: {s.Origin} </p>
                        </div>  
                        <div className="item">
                            <img src="star.png" />
                            <p>Đá tự nhiên</p>
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

export default Item;