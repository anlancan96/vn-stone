import React,{Component} from 'react';
import './item.css';
import {connect} from 'react-redux';
import Item from './item';
import queryString  from 'query-string';

class ItemController extends Component {
    constructor(props){
        super(props);
        this.displayItem = this.displayItem.bind(this);
    }
    displayItem(database){
        const parsed = queryString.parse(location.search);
        return Object.values(database).map(s => {
            return s.filter((item) =>{
               if(String(item.id)===parsed.id) {
                   return item;
                }
            });
        });
    }
    render(){
        const {database} = this.props;
        const items = this.displayItem(database).map((s,index) =>{
            if(s.length!==0)   return <Item item={s} key={index}/>
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
       database : state.database,
    }
}

export default connect(mapStateToProps)(ItemController);