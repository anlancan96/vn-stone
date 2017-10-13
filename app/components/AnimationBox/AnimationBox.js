import React,{Component} from'react';
import './AnimationBox.css';


class AnimationBox extends Component {

    render(){
        return(
            <div className="slider-wrapper futurico-theme">
                <div id="slider" className="nivoSlider">
                        <img src="../image/da-tu-nhien-vinastone-1-1005x280.jpg" alt="invalid" className="slide"/>
                        <img src="../image/da-tu-nhien-vinastone-2-1005x280.jpg" alt="invalid" className="slide"/>
                        <img src="../image/da-tu-nhien-vinastone-3-1005x280.jpg" alt="invalid" className="slide"/>
                        <img src="../image/da-tu-nhien-vinastone-4-1005x280.jpg" className="slide"/>
                </div>
            </div>
        )
    }
}

module.exports = AnimationBox;