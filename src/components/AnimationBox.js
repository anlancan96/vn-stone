import React,{Component} from'react';
import $ from 'jquery';


export default class AnimationBox extends Component {
    componentDidMount(){
        var $slide = $('#slider');
        var $slideContainer = $slide.find('.slides');
        var $slides = $slideContainer.find('.slide');
        var pause = 3000;
        var width = 1005;
        var currentSlide = 1;
        var interval;
        $(window).on('load',function() {
            function startSlider(){ 
                interval =  setInterval(function(){
                                    $slideContainer.animate({'marginLeft':'-='+width},500,function(){
                                        currentSlide++;
                                        if(currentSlide === $slides.length){
                                            currentSlide = 1;
                                            $slideContainer.css('marginLeft',0); 
                                        }
                                    });
                                    },pause);
            }
            
            function stopSlide(){
                clearInterval(interval);
            }
            $slide.on('mouseenter',stopSlide).on('mouseleave',startSlider);
            startSlider();
        })
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