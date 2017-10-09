import React,{Component} from 'react';
import './ListItem.css';

class ListItem extends Component {
    render(){
        return (
            <div className="rm_wrapper">
                <div id="rm_container" className="rm_container">
                    <ul>
                        <li data-images="rm_container_1" data-rotation="-15"><img src="../image/1.jpg"/></li>
                        <li data-images="rm_container_2" data-rotation="-5"><img src="../image/2.jpg"/></li>
                        <li data-images="rm_container_3" data-rotation="5"><img src="../image/3.jpg"/></li>
                        <li data-images="rm_container_4" data-rotation="15"><img src="../image/4.jpg"/></li>
                    </ul>
                    <div style={{display:'none'}}>
                            <div id="rm_container_1">
                                <img src="../image/1.jpg"/>
                                <img src="../image/5.jpg"/>
                                <img src="../image/6.jpg"/>
                                <img src="../image/7.jpg"/>
                            </div>
                            <div id="rm_container_2">
                                <img src="../image/2.jpg"/>
                                <img src="../image/8.jpg"/>
                                <img src="../image/9.jpg"/>
                                <img src="../image/10.jpg"/>
                            </div>
                            <div id="rm_container_3">
                                <img src="../image/3.jpg"/>
                                <img src="../image/11.jpg"/>
                                <img src="../image/12.jpg"/>
                                <img src="../image/13.jpg"/>
                            </div>
                            <div id="rm_container_4">
                                <img src="../image/4.jpg"/>
                                <img src="../image/14.jpg"/>
                                <img src="../image/15.jpg"/>
                                <img src="../image/16.jpg"/>
                            </div>
                    </div>
                </div>
                <div className="rm_nav">
                    <a id="rm_next" href="#" className="rm_next"></a>
                    <a id="rm_prev" href="#" className="rm_prev"></a>
                </div>
                <div className="rm_controls">
                    <a id="rm_play" href="#" className="rm_play">Play</a>
                    <a id="rm_pause" href="#" className="rm_pause">Pause</a>
                </div>
			</div>
        );
    }
}

export default ListItem;