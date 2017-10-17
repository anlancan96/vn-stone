import {combineReducers} from 'redux';
import filterStoneReducer from './filterStoneReducer';
import visibilityFilter from './visibilityFilter';
import filterLanguages from './filterLanguages';

const reducer = combineReducers({
    defaultState     : filterStoneReducer,
    visibilityFilter : visibilityFilter,
    whatLanguage     : filterLanguages
});
export default reducer;