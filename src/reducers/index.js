// import { combineReducers } from 'redux';

import { combineReducers } from  'redux';

import  bookreducer from  './reducer_book';

import  acitivebookreducer from './reducer_activebook';

console.log(bookreducer());

//book is a key and should be mapped to fun

const rootReducer = combineReducers({
  books:bookreducer,
  activebook:acitivebookreducer



});
console.log(rootReducer);

export default rootReducer;
