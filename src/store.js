/**
 * Created by wdy on 2018/6/13.
 */
import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as goodsList from './reducers/goods'
import thunk from 'redux-thunk'

let store = createStore(
  combineReducers({...goodsList}),
  applyMiddleware(thunk)
)

export default store;
