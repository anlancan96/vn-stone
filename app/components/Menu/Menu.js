import React,{Component} from 'react';
import './Menu.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {filterShowOne,setEnSub,setVnSub} from '../../actionCreator';

class Menu extends React.Component{
 
  render(){
    const {ChinaStone, Egypt1, Egypt2, Indian1,Indian2,Indian3,Indian4
           ,Italy,Spain,Turkey,VietNam,whatLanguage} = this.props;
      return(
          <div id="droplinemenu" className="droplinebar">
            <ul>
                <li className="home-menu"><a href="/"></a>
                  
                </li>
                  
                <li><a href="listStone?type=china"><span>{(whatLanguage==='en')?"ChinaStone":"Đá Trung Quốc"}<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >
                    
                    <li className="oc-left">
                        <a href="listStone?type=china"><span>{(whatLanguage==='en')?"Indian White":"Đá Ấn Trắng"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                          <ul className="prox"> 
                            { ChinaStone.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link} onClick={() => filterShowOne(s.id)}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })}  
                          </ul>   
                    </li>                
                  </ul>
                </li>

                <li><a href="listStone?type=egypt"><span>{(whatLanguage==='en')?"Egypt Stone":"Đá Ai Cập"}<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >           
                    <li className="oc-left">
                        <a href="listStone?type=egypt"><span>{(whatLanguage==='en')?"Egyptian Granite":"Granite Ai Cập"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                          <ul className="prox">  
                            { Egypt1.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link} onClick={() => filterShowOne(s.id)}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })}
                          </ul>  
                    </li>
                    <li className="oc-left">
                      <a href="listStone?type=egypt"><span>{(whatLanguage==='en')?"Egyptian Marble":"Marble Ai Cập"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                            <ul className="prox"> 
                            { Egypt2.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link} onClick={() => filterShowOne(s.id)}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })} 
                            </ul>
                    </li>                        
                  </ul>
                </li>

                <li><a href="listStone?type=idian"><span>{(whatLanguage==='en')?"Indian Stone":"Đá Ấn Độ"}<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >           
                    <li className="oc-left">
                        <a href="listStone?type=idian"><span>{(whatLanguage==='en')?"Black Galaxy":"Kim Sa Trung Ấn Độ"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                          <ul className="prox"> 
                            { Indian1.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link} onClick={() => filterShowOne(s.id)}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })}
                          </ul>  
                    </li>
                    <li className="oc-left">
                      <a href="listStone?type=idian"><span>{(whatLanguage==='en')?"Imperial Red":"Đỏ Hoang Gia"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                            <ul className="prox"> 
                            { Indian2.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link} onClick={() => filterShowOne(s.id)}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })} 
                            </ul>
                    </li>
                    <li className="oc-left">
                      <a href="listStone?type=idian"><span>{(whatLanguage==='en')?"Ruby Red":"Đỏ Ruby"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                            <ul className="prox"> 
                            { Indian3.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link} onClick={() => filterShowOne(s.id)}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })}  
                            </ul>
                    </li>
                    <li className="oc-left">
                      <a href="listStone?type=idian"><span>{(whatLanguage==='en')?"Tan Brown":"Nâu Anh Ấn Độ"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                            <ul className="prox"> 
                            { Indian4.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link} onClick={() => filterShowOne(s.id)}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })}  
                            </ul>      
                    </li>                                      
                  </ul>
                </li>

                <li><a href="listStone?type=italy"><span>{(whatLanguage==='en')?"Italy Stone":"Đá Ý"}<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >
                    
                    <li className="oc-left">
                        <a href="/"><span>{(whatLanguage==='en')?"Italian Marble":"Đá Cẩm Thạch"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                          <ul className="prox"> 
                          { Italy.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link} onClick={() => filterShowOne(s.id)}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })} 
                          </ul>   
                    </li>                
                  </ul>
                </li>

                <li><a href="listStone?type=spain"><span>{(whatLanguage==='en')?"Spain Stone":"Đá Tây Ban Nha"}<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >
                    
                    <li className="oc-left">
                        <a href="listStone?type=spain"><span>{(whatLanguage==='en')?" Spain Marble":"Đá Cẩm Thạch"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                          <ul className="prox"> 
                          { Spain.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link} onClick={() => filterShowOne(s.id)}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })} 
                          </ul>   
                    </li>                
                  </ul>
                </li>
                
                <li><a href="listStone?type=turkey"><span>{(whatLanguage==='en')?"Türkiye Stone":"Đá Thổ Nhĩ Kì"}<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >
                    
                    <li className="oc-left">
                        <a href="listStone?type=turkey"><span>{(whatLanguage==='en')?"Türkiye Granite":"Đá Hoa Cương"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                          <ul className="prox"> 
                          { Turkey.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link} onClick={() => filterShowOne(s.id)}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })}  
                          </ul>   
                    </li>                
                  </ul>
                </li>

                <li><a href="listStone?type=vietnam"><span>{(whatLanguage==='en')?"Viet Nam Stone":"Đá Việt Nam"}<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >
                    
                    <li className="oc-left">
                        <a href="listStone?type=vietnam"><span>{(whatLanguage==='en')?"VietNam Marble":"Đá Cẩm Thạch"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                          <ul className="prox"> 
                          { VietNam.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link} onClick={() => filterShowOne(s.id)}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })} 
                          </ul>   
                    </li>                
                  </ul>
                </li>    
                <li id="btn">
                  <button id="btn1" style={{marginTop:'40px'}} onClick={()=> this.props.setEnSub()}>en</button>
                  <button id="btn2" style={{marginTop:'40px'}} onClick={()=> this.props.setVnSub()}>vn</button>
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
      VietNam    : state.defaultState.VietNam,
      whatLanguage: state.whatLanguage,
    };
}

export default connect(mapStatetoProps,{filterShowOne,setEnSub,setVnSub})(Menu);