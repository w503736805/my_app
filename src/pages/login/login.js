/**
 * Created by wdy on 2018/6/6.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router';
// import cookie from 'react-cookies'
import Cookie from 'js-cookie'
import http from '../../service/https'
import { Form, Input, Button, Icon, message } from 'antd';
import 'antd/dist/antd.css';
import './login.css';
var md5 = require('md5')
const FormItem = Form.Item

class LoginItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '士兵'
    }
  }
  handleSubmit = (e) => {
    var _this = this
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      let userInfo = {
        header: {},
        body: {
          username: values.username,
          password: md5(values.password)
        }
      }
      http.post("/user/login", userInfo).then(function(res){
        if (res.code === '0000') {
          let saveInfo = {
            userName: res.data.userName,
            token: res.data.token
          }
          Cookie.set('saveInfo', JSON.stringify(saveInfo), {expires: 7})
          _this.props.history.push('/home')
        }
      })
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (
      <div className="login-container">
        <div className="login">
          <Form layout='horizontal' onSubmit={this.handleSubmit} className="login-form">
            <h2 className="login-title">登录账号</h2>
            <FormItem label="账号" {...formItemLayout}>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="请输入：guest"
                />
              )}
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="请输入：123456"
                />
              )}
            </FormItem>
            <Button className="ant-col-24" type="primary" htmlType="submit">
              登录
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}
const Login = Form.create()(LoginItem)
export default Login
