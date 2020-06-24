import { createStore } from 'redux';
import saveReducer from './reducer'


const store = createStore(saveReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;

