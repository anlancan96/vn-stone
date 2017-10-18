import {compose,createStore,applyMiddleware} from 'redux';
import reducer from '../reducers/reducer';
import {persistStore,autoRehydrate} from 'redux-persist';

const store = compose(
  autoRehydrate()
)(createStore)(reducer);
persistStore(store,{blacklist: ['defaultState','database']});

export default store;