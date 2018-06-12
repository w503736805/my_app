/**
 * Created by wdy on 2018/6/7.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Header from '../../components/header/index'

class Home extends Component {
  render() {
    return (
      <h2 className="App">
        <Header/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>hello worlddfsadfa</p>
        <li><Link to="/login">跳转</Link></li>
        <li className="iconfont">&#xe614;</li>
      </h2>
    );
  }
}
export default Home;
