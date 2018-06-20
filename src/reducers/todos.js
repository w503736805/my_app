/**
 * Created by wdy on 2018/6/13.
 */
import * as type from '../actions/action_type'
import Immutable from 'immutable'

let defaultState = {
  dataList: []
}

export const  proData = (state = defaultState, action) => {
  let imuDataList;
  let imuItem;
  switch (action.type) {
    case type.GOODSLIST:
      return {...state, ...action}
    case type.TOGGLESELECT:
      imuDataList = Immutable.List(state.dataList)
      imuItem = Immutable.Map(state.dataList[action.index])
      imuItem = imuItem.set('selectNum', action.selectNum)
      imuDataList = imuDataList.set(action.index, imuItem)
      return {...state, ...{dataList: imuDataList.toJS()}}
    case type.CLEARSELECTED:
      imuDataList = Immutable.fromJS(state.dataList)
      for (let i=0; i<state.dataList.length;i++) {
        imuDataList = imuDataList.update(i, item => {
          item = item.set('selectStatus', false)
          item = item.set('selectNum', 0)
          return item
        })
      }
      return {...state, ...{dataList:imuDataList.toJS()}}
    default:
      return {...state}
  }
}
