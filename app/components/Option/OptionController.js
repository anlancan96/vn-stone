import React,{Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Option.css';
import {connect} from 'react-redux';
import Option from './Option';
import queryString  from 'query-string';

class OptionController extends Component {
    constructor(props){
        super(props);
        this.displayItems = this.displayItems.bind(this);
    }
    displayItems(database){
        
        const parsed = queryString.parse(location.search);
        return Object.values(database).map(s => {
            return s.filter((item) =>{
                if(item.optionEn.toLowerCase()===parsed.op) return item;
            });
        });
    }
    render(){
        const {database} = this.props;
        const items = this.displayItems(database).map((s,index) =>{
            if(s.length!==0) return <Option item={s} key={index}/>
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

export default connect(mapStateToProps)(OptionController);