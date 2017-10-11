import React,{Component} from 'react';
import { Container,Category,Li,Img,Breadcrumb,A,H1 } from "./Page2Styled";
import Modal from 'react-bootstrap-modal';

const defaultStone = {
   ChinaStone : [
    {type : "Indian white", src :"../image/China/Indian White 1.jpg", description :"Indian white 1" },
    {type : "Indian white", src :"../image/China/Indian White 2.jpg", description :"Indian white 2" },
    {type : "Indian white", src :"../image/China/Indian White 3.jpg", description :"Indian white 3" },
    {type : "Indian white", src :"../image/China/Indian White 4.jpg", description :"Indian white 4" },
    {type : "Indian white", src :"../image/China/Indian White 5.jpg", description :"Indian white 5" } 
   ]
}
class Page2 extends Component {
    constructor(props) {
        super(props);
        this.state = {showModal:false                 
        };
      }
  render(){
      return(
          <Container>
              <Breadcrumb>
                <A href='/'>Trang chủ </A>
                » <A href='/'>Đá Trung Quốc</A>
              </Breadcrumb>
              <H1>Granite</H1>
              <Category>
                { defaultStone.ChinaStone.map(function(s,index){
                  return( 
                <Li>
                    <a href='/'>
                    <div>
                        <Img src={s.src}>
                        </Img>
                    </div>
                    <div>{s.description}</div>    
                    </a>
                </Li>
                )})}
              </Category>      
            <Modal show={this.state.showModal}>
            <h1>aa</h1>
            </Modal>     
          </Container>    
      )
  }
}

module.exports = Page2;