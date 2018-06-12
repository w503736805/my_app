/**
 * Created by wdy on 2018/6/6.
 */
import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
//获取创建history对象的方法
import createBrowserHistory from 'history/createBrowserHistory'
//创建history对象
const history = createBrowserHistory();
//引入组件页面
import Intro from '../pages/intro'

class IntroRouter extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <BrowserRouter>
        <Intro />
      </BrowserRouter>
    )
  }
}
export default IntroRouter;
