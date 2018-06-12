/**
 * Created by wdy on 2018/6/11.
 */
import React, {Component} from 'react';
import './index.css'
import logo from '../../logo.svg';
import Cookie from 'js-cookie'
import headerPic from '../../images/header/1528686015.jpg'
export default class Header extends Component {
  render () {
    const saveInfo = JSON.parse(Cookie.get('saveInfo'))
    return (
      <header className="headerCon">
        <div className="header">
          <div className="headerLeft">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="headerRight">
            {saveInfo.userName},欢迎您！
          </div>
        </div>
      </header>
    )
  }
}
console.log()
