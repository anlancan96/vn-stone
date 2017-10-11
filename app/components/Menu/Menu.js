import React,{Component} from 'react';
import './Menu.css';
import {connect} from 'react-redux';

class Menu extends React.Component{
    
    render(){
      const {ChinaStone, Egypt1, Egypt2, Indian1} = this.props;
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
                              { ChinaStone.map(s =>(
                                  <li key={s.id}><a href="/">
                                    <img className="imgprox" src={s.src}/>
                                    <h5>{s.description}</h5>	
                                  </a></li>     
                              ))}  
                            </ul>   
                      </li>                
                    </ul>
                  </li>

                  <li><a href="/"><span>Egypt Stone<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                    <ul className="oc-outer" >           
                      <li className="oc-left">
                          <a href="/"><span>Granite Ai Cập<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                            <ul className="prox"> 
                              { Egypt1.map(s =>(
                                  <li key={s.id}><a href="/">
                                    <img className="imgprox" src={s.src}/>
                                    <h5>{s.description}</h5>	
                                  </a></li>     
                              ))}  
                            </ul>  
                      </li>
                      <li className="oc-left">
                        <a href="/"><span>Marble Ai Cập<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                              <ul className="prox"> 
                                { Egypt2.map(s =>(
                                    <li key={s.id}><a href="/">
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                ))}  
                              </ul>
                      </li>                        
                    </ul>
                  </li>

                  <li><a href="/"><span>Indian Stone<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                    <ul className="oc-outer" >           
                      <li className="oc-left">
                          <a href="/"><span>Kim Sa Trung Ấn Độ<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                            <ul className="prox"> 
                              { Indian1.map(s =>(
                                  <li key={s.id}><a href="/">
                                    <img className="imgprox" src={s.src}/>
                                    <h5>{s.description}</h5>	
                                  </a></li>     
                              ))}  
                            </ul>  
                      </li>
                      <li className="oc-left">
                        <a href="/"><span>Đỏ Hoàng Gia<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                              <ul className="prox"> 
                                { Egypt2.map(s =>(
                                    <li key={s.id}><a href="/">
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                ))}  
                              </ul>
                      </li>
                      <li className="oc-left">
                        <a href="/"><span>Đỏ Hoàng Gia<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                              <ul className="prox"> 
                                { Egypt2.map(s =>(
                                    <li key={s.id}><a href="/">
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                ))}  
                              </ul>
                      </li>
                      <li className="oc-left">
                        <a href="/"><span>Đỏ Ruby<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                              <ul className="prox"> 
                                { Egypt2.map(s =>(
                                    <li key={s.id}><a href="/">
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                ))}  
                              </ul>
                      </li>
                      <li className="oc-left">
                        <a href="/"><span>Nâu Anh Ấn Độ<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                              <ul className="prox"> 
                                { Egypt2.map(s =>(
                                    <li key={s.id}><a href="/">
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                ))}  
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
    ImageExample1:"http://vinastone.com/image/cache/data/vinastone/san-pham/mosaic/Bluestone/1.B01Rchipsize15x15mm-80x80.jpg",
}    

function mapStatetoProps(state){
    return {
      ChinaStone : state.ChinaStone,
      Egypt1     : state.Egypt1,
      Egypt2     : state.Egypt2,
      Indian1    : state.Indian1,
    };
}

export default connect(mapStatetoProps)(Menu);