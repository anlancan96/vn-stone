import React,{Component} from'react';
import Coverflow from 'react-coverflow';


class Animation extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          active: 0
        };
      }
      _handleClick() {
        var num = Math.floor((Math.random() * 10) + 1);
        this.setState({
          active: num
        });
      }
   
    render(){
        return(
            <div>
        <button onClick={this._handleClick.bind(this)}>Radom</button>
        <Coverflow
          width={960}
          height={400}
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={false}
          active={this.state.active}
          >
          <img src='https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/18740316_1850168941975041_8775827599142167768_n.jpg?oh=7af159cca162c26cbc990a5670f29092&oe=5A4069F8' data-action="http://passer.cc"/>
          <img src='https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/14690931_1711980629127207_6593188793203673863_n.jpg?oh=831e5742d7a81601d7b5ad27afb3d341&oe=5A3E1789'  data-action="https://doce.cc/"/>
          <img src='https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/13103448_1613335488991722_500792348957960144_n.jpg?oh=98e3137d39c005a1ced6d25b74aa1b60&oe=5A411A04'  data-action="http://tw.yahoo.com"/>
        </Coverflow>
         
        <h1>aaa</h1>
      </div>  
        )
    }
}


module.exports=Animation;