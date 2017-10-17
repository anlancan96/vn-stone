import {compose,createStore,applyMiddleware} from 'redux';
import reducer from '../reducers/reducer';
import {persistStore,autoRehydrate} from 'redux-persist';
import localForage from 'localforage';  

const store = compose(
  autoRehydrate()
)(createStore)(reducer);
persistStore(store,{storage: localForage});

export default store;