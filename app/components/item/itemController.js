import React,{Component} from 'react';
import './item.css';
import {connect} from 'react-redux';
import Item from './item';
import queryString  from 'query-string';
const parsed = queryString.parse(location.search);
class ItemController extends Component {
    constructor(props){
        super(props);
        this.displayItem = this.displayItem.bind(this);
    }
    displayItem(defaultState){
        const parsed = queryString.parse(location.search);
        return Object.values(defaultState).map(s => {
            return s.filter((item) =>{
                console.log(String(item.id)===parsed.id); //cái này ko lỗi
               if(String(item.id)===parsed.id) {
                   return item;
                }
            });
        });
    }
    render(){
        const {defaultState} = this.props;
        const items = this.displayItem(defaultState).map((s) =>{
            if(s.length!==0)   return <Item item={s}/>
        });
        return (
            <div>
                {items}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
       defaultState : state.defaultState,
    }
}

export default connect(mapStateToProps)(ItemController);