import React,{Component} from 'react';
import './Menu.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {filterShowOne} from '../../actionCreator';

class Menu extends React.Component{
 
  render(){
    const {ChinaStone, Egypt1, Egypt2, Indian1,Indian2,Indian3,Indian4
           ,Italy,Spain,Turkey,VietNam} = this.props;
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
                                <li key={s.id}><a href="/a" onClick={() => filterShowOne(s.id)}>
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
                                <li key={s.id}><a href="/a" onClick={() => filterShowOne(s.id)}>
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
                                  <li key={s.id}><a href="/a" onClick={() => filterShowOne(s.id)}>
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
                                <li key={s.id}><a href="/a" onClick={() => filterShowOne(s.id)}>
                                  <img className="imgprox" src={s.src}/>
                                  <h5>{s.description}</h5>	
                                </a></li>     
                            ))}  
                          </ul>  
                    </li>
                    <li className="oc-left">
                      <a href="/"><span>Đỏ Hoàng Gia<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                            <ul className="prox"> 
                              { Indian2.map(s =>(
                                  <li key={s.id}><a href="/a" onClick={() => filterShowOne(s.id)}>
                                    <img className="imgprox" src={s.src}/>
                                    <h5>{s.description}</h5>	
                                  </a></li>     
                              ))}  
                            </ul>
                    </li>
                    <li className="oc-left">
                      <a href="/"><span>Đỏ Ruby<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                            <ul className="prox"> 
                              { Indian3.map(s =>(
                                  <li key={s.id}><a href="/a" onClick={() => filterShowOne(s.id)}>
                                    <img className="imgprox" src={s.src}/>
                                    <h5>{s.description}</h5>	
                                  </a></li>     
                              ))}  
                            </ul>
                    </li>
                    <li className="oc-left">
                      <a href="/a"><span>Nâu Anh Ấn Độ<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                            <ul className="prox"> 
                              { Indian4.map(s =>(
                                  <li key={s.id}><a href="/a" onClick={() => filterShowOne(s.id)}>
                                    <img className="imgprox" src={s.src}/>
                                    <h5>{s.description}</h5>	
                                  </a></li>     
                              ))}  
                            </ul>      
                    </li>                                      
                  </ul>
                </li>

                <li><a href="/"><span>Italy Stone<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >
                    
                    <li className="oc-left">
                        <a href="/"><span>Marble<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                          <ul className="prox"> 
                            { Italy.map(s =>(
                                <li key={s.id}><a href="/a" onClick={() => filterShowOne(s.id)}>
                                  <img className="imgprox" src={s.src}/>
                                  <h5>{s.description}</h5>	
                                </a></li>     
                            ))}  
                          </ul>   
                    </li>                
                  </ul>
                </li>

                <li><a href="/"><span>Spain Stone<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >
                    
                    <li className="oc-left">
                        <a href="/"><span>Marble<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                          <ul className="prox"> 
                            { Spain.map(s =>(
                                <li key={s.id}><a href="/a" onClick={() => filterShowOne(s.id)}>
                                  <img className="imgprox" src={s.src}/>
                                  <h5>{s.description}</h5>	
                                </a></li>     
                            ))}  
                          </ul>   
                    </li>                
                  </ul>
                </li>
                
                <li><a href="/"><span>Turkey Stone<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >
                    
                    <li className="oc-left">
                        <a href="/"><span>Granite<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                          <ul className="prox"> 
                            { Turkey.map(s =>(
                                <li key={s.id}><a href="/a" onClick={() => filterShowOne(s.id)}>
                                  <img className="imgprox" src={s.src}/>
                                  <h5>{s.description}</h5>	
                                </a></li>     
                            ))}  
                          </ul>   
                    </li>                
                  </ul>
                </li>

                <li><a href="/"><span>VietNam Stone<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >
                    
                    <li className="oc-left">
                        <a href="/"><span>Marble<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                          <ul className="prox"> 
                            { VietNam.map(s =>(
                                <li key={s.id}><a href="/a" onClick={() => filterShowOne(s.id)}>
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
      ChinaStone : state.defaultState.ChinaStone,
      Egypt1     : state.defaultState.Egypt1,
      Egypt2     : state.defaultState.Egypt2,
      Indian1    : state.defaultState.Indian1,
      Indian2    : state.defaultState.Indian2,
      Indian3    : state.defaultState.Indian3,
      Indian4    : state.defaultState.Indian4,
      Italy      : state.defaultState.Italy,
      Spain      : state.defaultState.Spain,
      Turkey     : state.defaultState.Turkey,
      VietNam    : state.defaultState.VietNam
    };
}

export default connect(mapStatetoProps,{filterShowOne})(Menu);