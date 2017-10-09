import React,{Component} from 'react';
import './Menu.css';

const defaultStone = {
   ChinaStone : [
    {type : "Indian white", src :"../image/China/Indian White 1.jpg", description :"Indian white 1" },
    {type : "Indian white", src :"../image/China/Indian White 2.jpg", description :"Indian white 2" },
    {type : "Indian white", src :"../image/China/Indian White 3.jpg", description :"Indian white 3" },
    {type : "Indian white", src :"../image/China/Indian White 4.jpg", description :"Indian white 4" },
    {type : "Indian white", src :"../image/China/Indian White 5.jpg", description :"Indian white 5" } 
   ],
   Egypt1      : [
    {type : "Egypt", src :"../image/Egypt/Granite Ai Cập/Fardy-Green.jpg", description :"Fardy-Green" },
    {type : "Egypt", src :"../image/Egypt/Granite Ai Cập/Fardy-Yellow.jpg", description :"Fardy-Yellow" },
    {type : "Egypt", src :"../image/Egypt/Granite Ai Cập/Forsan.jpg", description :"Forsan" },
    {type : "Egypt", src :"../image/Egypt/Granite Ai Cập/Gendola-1.jpg", description :"Gendola-1" },
    {type : "Egypt", src :"../image/Egypt/Granite Ai Cập/Gendola-2.jpg", description :"Gendola-2" },
    {type : "Egypt", src :"../image/Egypt/Granite Ai Cập/Gray.jpg", description :"Gray" },
    {type : "Egypt", src :"../image/Egypt/Granite Ai Cập/Red Aswan Granite Slabs17.jpg", description :"Red Aswan Granite" },
    {type : "Egypt", src :"../image/Egypt/Granite Ai Cập/Halayb White Granite Slabs19 (1).jpg", description :"Halay White" },
   ],
   Egypt2      : [
    {type : "Egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra (8).jpg", description :"Glala extra (8)" },
    {type : "Egypt", src :"../image/Egypt/Marble Ai Cap/Glala extra high quality.jpg", description :"Glala extra high quality" },
    {type : "Egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (4).jpg", description :"Royal creama (4)" },
    {type : "Egypt", src :"../image/Egypt/Marble Ai Cap/sinai pearle (2).jpg", description :"Sinai pearle (2)" },
    {type : "Egypt", src :"../image/Egypt/Marble Ai Cap/Royal creama (9).jpg", description :"Royal creama (9)" },
    {type : "Egypt", src :"../image/Egypt/Marble Ai Cap/sunny (2).jpg", description :"Sunny (2)" },
    {type : "Egypt", src :"../image/Egypt/Marble Ai Cap/travin (2).jpg", description :"Travin (2)" },
    {type : "Egypt", src :"../image/Egypt/Marble Ai Cap/Royal Gray Polished slabs 2cm31.jpg", description :"Royal Gray Polished slabs 2cm31" },
   ],
   Indian1      : [
    {type : "Indian white", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/Black Galaxy- Slabs.jpg", description :"Black Galaxy- Slabs" },
    {type : "Indian white", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0004.jpg", description :"IMG-20170402-WA0004" },
    {type : "Indian white", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0008.jpg", description :"IMG-20170402-WA0008" },
    {type : "Indian white", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0012.jpg", description :"IMG-20170402-WA0012" },
    {type : "Indian white", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170911-WA0005.jpg", description :"IMG-20170911-WA0005" },
    {type : "Indian white", src :"../image/Indian/Black Galaxy - Kim Sa Trung Ấn Độ/IMG-20170402-WA0009.jpg", description :"IMG-20170402-WA0009" }, 
   ],   
}

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
                              { defaultStone.ChinaStone.map(s =>(
                                  <li><a href="/">
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
                              { defaultStone.Egypt1.map(s =>(
                                  <li><a href="/">
                                    <img className="imgprox" src={s.src}/>
                                    <h5>{s.description}</h5>	
                                  </a></li>     
                              ))}  
                            </ul>  
                      </li>
                      <li className="oc-left">
                        <a href="/"><span>Marble Ai Cập<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                              <ul className="prox"> 
                                { defaultStone.Egypt2.map(s =>(
                                    <li><a href="/">
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
                              { defaultStone.Indian1.map(s =>(
                                  <li><a href="/">
                                    <img className="imgprox" src={s.src}/>
                                    <h5>{s.description}</h5>	
                                  </a></li>     
                              ))}  
                            </ul>  
                      </li>
                      <li className="oc-left">
                        <a href="/"><span>Đỏ Hoàng Gia<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                              <ul className="prox"> 
                                { defaultStone.Egypt2.map(s =>(
                                    <li><a href="/">
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                ))}  
                              </ul>
                      </li>
                      <li className="oc-left">
                        <a href="/"><span>Đỏ Hoàng Gia<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                              <ul className="prox"> 
                                { defaultStone.Egypt2.map(s =>(
                                    <li><a href="/">
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                ))}  
                              </ul>
                      </li>
                      <li className="oc-left">
                        <a href="/"><span>Đỏ Ruby<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                              <ul className="prox"> 
                                { defaultStone.Egypt2.map(s =>(
                                    <li><a href="/">
                                      <img className="imgprox" src={s.src}/>
                                      <h5>{s.description}</h5>	
                                    </a></li>     
                                ))}  
                              </ul>
                      </li>
                      <li className="oc-left">
                        <a href="/"><span>Nâu Anh Ấn Độ<img src={this.props.IconDown} className="downarrowclassName"/></span></a>
                              <ul className="prox"> 
                                { defaultStone.Egypt2.map(s =>(
                                    <li><a href="/">
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
//
Menu.defaultProps={
    IconHome:"http://vinastone.com/catalog/view/javascript/menu-arrow-down.png",
    IconDown:"http://vinastone.com/catalog/view/javascript/menu-arrow-down.png",
    ImageExample1:"http://vinastone.com/image/cache/data/vinastone/san-pham/mosaic/Bluestone/1.B01Rchipsize15x15mm-80x80.jpg",
}    

module.exports = Menu;