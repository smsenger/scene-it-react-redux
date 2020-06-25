import { createStore } from 'redux';
import saveReducer from './reducer';
import { saveState } from './localStorage';
import { loadState } from './localStorage';
import throttle from 'lodash.throttle';


const persistedState = loadState();

const store = createStore(
    saveReducer,
    // app,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    saveState({
        movies: store.getState().movies
    });
});

store.subscribe(throttle(() => {
    saveState({
      movies: store.getState().movies
    });
  }, 1000));

export default store;

