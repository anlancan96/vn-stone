import React,{Component} from 'react';
import './Menu.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setEnSub,setVnSub} from '../../actionCreator';

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
                        <a href="option?op=indian white"><span>{(whatLanguage==='en')?"Indian White":"Đá Ấn Trắng"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                          <ul className="prox"> 
                            { ChinaStone.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })}  
                            <li><a className="readmorepro" href ="option?op=indian white">View All</a></li>
                          </ul>   
                    </li>                
                  </ul>
                </li>

                <li><a href="listStone?type=egypt"><span>{(whatLanguage==='en')?"Egypt Stone":"Đá Ai Cập"}<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >           
                    <li className="oc-left">
                        <a href="option?op=egyptian granite"><span>{(whatLanguage==='en')?"Egyptian Granite":"Granite Ai Cập"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                          <ul className="prox">  
                            { Egypt1.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })}
                            <li><a className="readmorepro" href ="option?op=egyptian granite">View All</a></li>
                          </ul>  
                    </li>
                    <li className="oc-left">
                      <a href="option?op=egyptian marble"><span>{(whatLanguage==='en')?"Egyptian Marble":"Marble Ai Cập"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                            <ul className="prox"> 
                            { Egypt2.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })} 
                            <li><a className="readmorepro" href ="option?op=egyptian marble">View All</a></li>
                            </ul>
                    </li>                        
                  </ul>
                </li>

                <li><a href="listStone?type=indian"><span>{(whatLanguage==='en')?"Indian Stone":"Đá Ấn Độ"}<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >           
                    <li className="oc-left">
                        <a href="option?op=black galaxy"><span>{(whatLanguage==='en')?"Black Galaxy":"Kim Sa Trung Ấn Độ"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                          <ul className="prox"> 
                            { Indian1.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })}
                            <li><a className="readmorepro" href ="option?op=black galaxy">View All</a></li>
                          </ul>  
                    </li>
                    <li className="oc-left">
                      <a href="option?op=imperial red"><span>{(whatLanguage==='en')?"Imperial Red":"Đỏ Hoang Gia"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                            <ul className="prox"> 
                            { Indian2.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })} 
                            <li><a className="readmorepro" href ="option?op=imperial red">View All</a></li>
                            </ul>
                    </li>
                    <li className="oc-left">
                      <a href="option?op=ruby red"><span>{(whatLanguage==='en')?"Ruby Red":"Đỏ Ruby"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                            <ul className="prox"> 
                            { Indian3.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })}  
                            <li><a className="readmorepro" href ="option?op=ruby red">View All</a></li>
                            </ul>
                    </li>
                    <li className="oc-left">
                      <a href="option?op=tan brown"><span>{(whatLanguage==='en')?"Tan Brown":"Nâu Anh Ấn Độ"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                            <ul className="prox"> 
                            { Indian4.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })}  
                            <li><a className="readmorepro" href ="option?op=tan brown">View All</a></li>
                            </ul>      
                    </li>                                      
                  </ul>
                </li>

                <li><a href="listStone?type=italy"><span>{(whatLanguage==='en')?"Italy Stone":"Đá Ý"}<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >
                    
                    <li className="oc-left">
                        <a href="option?op=italian white"><span>{(whatLanguage==='en')?"Italian Marble":"Đá Cẩm Thạch"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                          <ul className="prox"> 
                          { Italy.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })} 
                            <li><a className="readmorepro" href ="option?op=italian white">View All</a></li>
                          </ul>   
                    </li>                
                  </ul>
                </li>

                <li><a href="listStone?type=spain"><span>{(whatLanguage==='en')?"Spain Stone":"Đá Tây Ban Nha"}<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >
                    
                    <li className="oc-left">
                        <a href="option?op=spain brown"><span>{(whatLanguage==='en')?" Spain Marble":"Đá Cẩm Thạch"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                          <ul className="prox"> 
                          { Spain.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })} 
                            <li><a className="readmorepro" href ="option?op=spain brown">View All</a></li>
                          </ul>   
                    </li>                
                  </ul>
                </li>
                
                <li><a href="listStone?type=turkey"><span>{(whatLanguage==='en')?"Türkiye Stone":"Đá Thổ Nhĩ Kì"}<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >
                    
                    <li className="oc-left">
                        <a href="option?op=turkey"><span>{(whatLanguage==='en')?"Türkiye Granite":"Đá Hoa Cương"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                          <ul className="prox"> 
                          { Turkey.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })}  
                            <li><a className="readmorepro" href ="option?op=turkey">View All</a></li>
                          </ul>   
                    </li>                
                  </ul>
                </li>

                <li><a href="listStone?type=vietnam"><span>{(whatLanguage==='en')?"Viet Nam Stone":"Đá Việt Nam"}<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >
                    
                    <li className="oc-left">
                        <a href="option?op=vang binh dinh"><span>{(whatLanguage==='en')?"VietNam Marble":"Đá Cẩm Thạch"}<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                          <ul className="prox"> 
                          { VietNam.map((s,index) =>{
                              let link = "product?id=" + s.id;
                              return  (
                                  <li key={s.id}><a href ={link}>
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                )
                            })} 
                            <li><a className="readmorepro" href ="option?op=vang binh dinh">View All</a></li>
                          </ul>   
                    </li>                
                  </ul>
                </li>   
                <li><a href="/"><span>{(whatLanguage==='en')?"Language":"Ngôn ngữ"}<img src={this.props.IconDown} className="downarrowclassName" /></span></a>
                  <ul className="oc-outer" >
                    
                    <li className="oc-left">
                        <a onClick={()=> this.props.setEnSub()} className="sub"><span >English</span></a>
                    </li>     
                    <li className="oc-left">
                        <a onClick={()=> this.props.setVnSub()} className="sub"><span >Việt Nam</span></a>
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
    IconDown:"http://vinastone.com/catalog/view/javascript/menu-arrow-down.png"
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

export default connect(mapStatetoProps,{setEnSub,setVnSub})(Menu);