/**
 * Created by wdy on 2018/6/7.
 */
import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home/index';
import Login from '../pages/login/login';

const Intro = () => (
  <div>
    {/*<Switch>*/}
      <Route exact path={`/home`} component={Home}></Route>
      <Route exact path={`/`} component={Login}></Route>
    {/*</Switch>*/}
  </div>
)
export default Intro
