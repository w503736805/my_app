/**
 * Created by wdy on 2018/6/13.
 */
import * as type from './action_type'
// import http from '../service/https'

let defaultPramms = {
  pageIndex: 1,
  pageSize: 6
}
export const getGoodsList = () => {
  return async dispatch => {
    try {
      let result = await axios.post('/tender/list', JSON.stringify(defaultPramms))
      console.log(result)
      dispatch({
        type: type.GOODSLIST,
        dataList: result
      })
    } catch (err) {
      console.log(err)
    }
  }
}

/*選擇商品*/
export const togEelectPro = index => {
  return {
    type: type.TOGGLESELECT,
    index,
  }
}

/*编辑商品*/
export const editPro = (index, selectNum) => {
  return {
    type: type.EDITPRODUCTION,
    index,
    selectNum
  }
}

/*清空选择*/
export const clearSelected = () => {
  return {
    type: type.CLEARSELECTED
  }
}
