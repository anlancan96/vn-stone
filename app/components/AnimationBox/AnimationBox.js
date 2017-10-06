import React,{Component} from'react';
import './AnimationBox.css';


class AnimationBox extends Component {

    render(){
        return(
            <div className="slider-wrapper  futurico-theme">
                <div id="slider" className="nivoSlider">
                        <img src={this.props.link1} alt="invalid" className="slide"/>
                        <img src={this.props.link2} alt="invalid" className="slide"/>
                        <img src={this.props.link3} alt="invalid" className="slide"/>
                </div>
            </div>
        )
    }
}

AnimationBox.defaultProps = {
    link1 : 'http://www.bepxinh.vn/media/bx2014/thietkenoithat/phong-khach-chi-huong-son-la/phong-khach-chi-huong-son-la-1.jpg',
    link2 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLmIim1bW3Hcd9nKEh3uEhwCtXHgBzw_a-311hxBbfYiy10rZS',
    link3 : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPVrTr3aHGhIFjA8VA3rfswHyiSWnrqErPcThDsOqdNnPVPpv'
}

module.exports = AnimationBox;