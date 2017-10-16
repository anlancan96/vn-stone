import React,{Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './ListOfItem.css';
import {connect} from 'react-redux';
import ListOfItem from './ListOfItem';

class ListOfItemsController extends Component {
    constructor(props){
        super(props);
        this.state ={
            type :"Turkey",
        }
        this.displayItems = this.displayItems.bind(this);
    }
    displayItems(defaultState){
        return Object.values(defaultState).map(s => {
            return s.filter((item) =>{
                if(item.type===this.state.type) return item;
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