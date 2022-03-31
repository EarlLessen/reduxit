import {createStore, combineReducers} from 'redux';
import {allNames} from '@src/reducer';

const reducers = {
  allNames: allNames,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
