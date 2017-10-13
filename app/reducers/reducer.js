import {combineReducers} from 'redux';
import filterStoneReducer from './filterStoneReducer';
import visibilityFilter from './visibilityFilter';

const reducer = combineReducers({
    defaultState : filterStoneReducer,
    visibilityFilter : visibilityFilter,    
});
export default reducer;