import React,{Component} from 'react';
import './item.css';

class Item extends Component {
    render(){
        return(
            <div className="Container">
               <img src="/image/China/Indian White 1.jpg" />
               <div className="Info">
                   <h1>Idian white stone 1</h1>
                   <p>Price: contact</p>
                   <p>{this.props.item}</p>
               </div>    
            </div>    
        )
    }
}

export default Item;