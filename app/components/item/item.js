import React,{Component} from 'react';
import './item.css';

class Item extends Component {
    render(){
        return(
            <div >
                {this.props.item.map((s,index) =>{
                    return( 
                    <div key={index} className="Container">
                        <img src={s.src} />
                        <div className="Info">
                        <h1>{s.description}</h1>
                        <p>Giá: liên hệ</p>
                        <p>Xuất sứ: {s.Origin} </p>
                        <p>Đá tự nhiên</p>
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