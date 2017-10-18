import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import queryString  from 'query-string';
import ListOfItem from '../ListOfItem/ListOfItem';

const filterItems = (items,query) =>{
    return Object.values(items).map(s => {
        return s.filter((item) =>{
            if((item.type.indexOf(query.toLowerCase()) != -1)||
              (item.optionVn.toLowerCase().indexOf(query.toLowerCase()) != -1)||
              (item.optionEn.toLowerCase().indexOf(query.toLowerCase()) != -1)||
              (item.description.toLowerCase().indexOf(query.toLowerCase()) != -1)||
              (item.OriginVn.toLowerCase().indexOf(query.toLowerCase()) != -1))
                 return item;
        });
    });
}

class SearchController extends PureComponent {
    state = {
        query     : "",  
    }
    componentWillMount(){
        const parsed = queryString.parse(location.search);
        this.setState({query : parsed.data}); 
    }
    displayItems = (database) => {
        const items = filterItems(database,this.state.query);
        return items.filter(s => s.length!==0);
    };
    render(){
        const {whatLanguage,database} = this.props;
        const items = this.displayItems(database).map((s,index) =>{
            return <ListOfItem item={s} key={index}/>
        })
        return (
            <div style={{marginTop:'50px'}}>
                {items.length!==0 ? items:(<h6>{whatLanguage ==='en' ? "Please set the correct value and try again" : "Vui lòng đặt đúng giá trị và thử lại"}</h6>)}
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
export default connect(mapStateToProps)(SearchController);

