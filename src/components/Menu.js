import React,{Component} from 'react';
import styles from '../style/Menu.css';


class Menu extends React.Component{
    render(){
        return(
            <div id="droplinemenu" className="droplinebar">
            <ul>
                <li className="home-menu"><a href="/"></a>
                  <ul className="oc-outer" >  
                    <li className="oc-left">
                      <a href="/">Thư viện ứng dụng<img src={this.props.IconDown}/></a>  
                      <ul id="ul13">
                      </ul>   
                    </li>
                    <li></li> 
                  </ul> 
                </li>   
                <li><a href="/"><span>Đá Trung Quốc<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >
                    <li className="oc-left">
                        <a href="/"><span>Đá loại1<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                        <ul className="prox" >
                            <li><a href="/">
                              <img className="imgprox" src={this.props.ImageExample1}/>
                              <h5>Đá tự nhiên 1</h5>	
                              </a></li>
                              <li><a href="/">
                                <img className="imgprox" src={this.props.ImageExample1} />
                                <h5>Đá tự nhiên 2</h5>	
                                </a></li>  
                        </ul>         
                    </li>
                    <li className="oc-left">
                        <a href="/"><span>Đá loại2<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                        <ul className="prox">
                            <li><a href="/">
                              <img className="imgprox" src={this.props.ImageExample1}/>
                              <h5>Đá tự nhiên 3</h5>	
                              </a></li>
                              <li><a href="/">
                                <img className="imgprox" src={this.props.ImageExample1}/>
                                <h5>Đá tự nhiên4</h5>	
                                </a></li>   
                        </ul>        
                    </li>                
                  </ul>
                </li>     
            </ul>
          </div>
        )
    }
}

Menu.defaultProps={
    IconHome:"http://vinastone.com/catalog/view/javascript/menu-arrow-down.png",
    IconDown:"http://vinastone.com/catalog/view/javascript/menu-arrow-down.png",
    ImageExample1:"http://vinastone.com/image/cache/data/vinastone/san-pham/mosaic/Bluestone/1.B01Rchipsize15x15mm-80x80.jpg"
}

export default Menu;