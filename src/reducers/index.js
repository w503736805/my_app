/**
 * Created by wdy on 2018/6/12.
 */
import * as type from '../actions/action_type'

let defaultState = {
  userName: '',
}

export const formData = (state = defaultState, action = {}) => {
  switch(action.type){
    case type.USERINFO:
      return {...state, ...{[action.datatype]: action.value}}
    case type.SAVEFORMDATA:
      return {...state, ...{userName: action.userName}}
    default:
      return {...state, ...defaultState}
  }

}
