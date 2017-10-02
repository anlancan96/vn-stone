import React,{Component} from'react';
import $ from 'jquery';

export default class AnimationBox extends Component {
    componentDidMount(){
        $(window).on('load',function() {
           var $slide = $('#slider');
           var $slides = $slide.find('.slides');
           var pause = 3000;
           var width = 720;
           var currentSlide = 1;
           setInterval(function(){
               $slides.animate({'marginLeft':'-='+width},1000);
           },pause);
        });
        
    }
    render(){
        return(
            <div id="slider">
                <div  className="slides">
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