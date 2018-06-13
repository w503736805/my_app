/**
 * Created by wdy on 2018/6/12.
 */
import * as type from './action_type'
import * as http from '../service/https'

/*保存表单数据*/
export const saveFormData = (value, datatype) => {
  return {
    type: type.SAVEFORMDATA,
    value,
    datatype,
  }
}

/*保存登录信息*/
export const userInfo = () => {
  return {
    type: type.USERINFO
  }
}
