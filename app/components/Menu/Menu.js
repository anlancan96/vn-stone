import React,{Component} from 'react';
import './Menu.css';

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
                <li><a href="/"><span>China Stone<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >
                    
                    <li className="oc-left">
                        <a href="/"><span>Indian white<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                        <ul className="prox">
                            <li><a href="/">
                              <img className="imgprox" src={this.props.IndianWhite1}/>
                              <h5>Indian white 1</h5>	
                              </a></li>
                              <li><a href="/">
                                <img className="imgprox" src={this.props.IndianWhite2}/>
                                <h5>Indian white 2</h5>	
                                </a></li>  
                                <li><a href="/">
                              <img className="imgprox" src={this.props.IndianWhite3}/>
                              <h5>Indian white 3</h5>	
                              </a></li>
                              <li><a href="/">
                              <img className="imgprox" src={this.props.IndianWhite4}/>
                              <h5>Indian white 4</h5>	
                              </a></li>
                              <li><a href="/">
                              <img className="imgprox" src={this.props.IndianWhite5}/>
                              <h5>Indian white 5</h5>	
                              </a></li> 
                        </ul>        
                    </li>                
                  </ul>
                </li>     
                <li><a href="/"><span>Egypt Stone<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >
                    <li className="oc-left">
                        <a href="/"><span>Granite Ai Cập<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                        <ul className="prox" >
                            <li><a href="/">
                              <img className="imgprox" src={this.props.FardyGreen}/>
                              <h5>Fardy-Green</h5>	
                              </a></li>
                              <li><a href="/">
                                <img className="imgprox" src={this.props.FardyYellow} />
                                <h5>Fardy-Yellow</h5>	
                                </a></li>  
                        </ul>         
                    </li>
                    <li className="oc-left">
                        <a href="/"><span>Marble Ai Cập<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
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
                <li><a href="/"><span>Đá Thuỵ Sỹ<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
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
                <li><a href="/"><span>Đá Ấn Độ<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
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
    IndianWhite1:"Indian White 1.jpg",
    IndianWhite2:"Indian White 2.jpg",
    IndianWhite3:"Indian White 3.jpg",
    IndianWhite4:"Indian White 4.jpg",
    IndianWhite5:"Indian White 5.jpg",
    ImageExample1:"http://vinastone.com/image/cache/data/vinastone/san-pham/mosaic/Bluestone/1.B01Rchipsize15x15mm-80x80.jpg"
}

module.exports = Menu;