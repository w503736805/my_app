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
import Home from '../pages/home/index';
import Login from '../pages/login/login';

// const Intro = () => (
//   <div>
//     {/*<Switch>*/}
//
//     {/*</Switch>*/}
//   </div>
// )

class IntroRouter extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <BrowserRouter>
        <Route exact path={`/login`} component={Login}></Route>
        <Route exact path={`/`} component={Home}></Route>
      </BrowserRouter>
    )
  }
}
export default IntroRouter;
