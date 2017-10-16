import React,{Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './ListOfItem.css';
import {connect} from 'react-redux';
import ListOfItem from './ListOfItem';
import queryString  from 'query-string';

class ListOfItemsController extends Component {
    constructor(props){
        super(props);
        this.state ={
            type :"Turkey",
        }
        this.displayItems = this.displayItems.bind(this);
    }
    displayItems(defaultState){
        
        const parsed = queryString.parse(location.search);
        console.log(parsed.type);
        return Object.values(defaultState).map(s => {
            return s.filter((item) =>{
                if(item.type===parsed.type) return item;
            });
        });
    }
    render(){
        const {defaultState} = this.props;
        const items = this.displayItems(defaultState).map((s) =>{
            if(s.length!==0) return <ListOfItem item={s}/>
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

export default connect(mapStateToProps)(ListOfItemsController);