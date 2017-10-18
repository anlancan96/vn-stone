import {combineReducers} from 'redux';
import filterStoneReducer from './filterStoneReducer';
import filterLanguages from './filterLanguages';
import filterDatabase from './filterDatabase';

const reducer = combineReducers({
    defaultState     : filterStoneReducer,
    whatLanguage     : filterLanguages,
    database         : filterDatabase,
});
export default reducer;