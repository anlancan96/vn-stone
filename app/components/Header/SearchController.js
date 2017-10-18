import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import queryString  from 'query-string';


const filterItems = (items,query) =>{
    const regex = new RegExp(query);
    return Object.values(items).map(s => {
        return s.filter((item) =>{
            if(regex.test(item.type||item.optionEn||item.optionVn||item.desciption)) 
              {  this.setState({showItems : false});
                 return item;
              }
        });
    });
}

class SearchController extends PureComponent {
    state = {
        query     : "",
        showItems : true,    
    }
    displayItems = (database) => {
        const parsed = queryString.parse(location.search);
        this.setState({query : parsed.data});
        const items = filterItems(database,this.state.query);
        return items.length ? "àdef":(<h6>{
            whatLanguage ==='en' ? "Please set the correct value and try again" : "Vui lòng đặt đúng giá trị và thử lại"}</h6>)
    };
    render(){
        const {whatLanguage,database} = this.props;
        return (
            <div style={{marginTop:'50px'}}>
                {showItems ? this.displayItems(database) : null}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        database : state.database,
        whatLanguage : state.whatLanguage,
    }
}
export default connect(mapStateToProps)(SearchController)