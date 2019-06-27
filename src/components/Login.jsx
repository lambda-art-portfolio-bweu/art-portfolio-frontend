import React from "react";
import styled from "styled-components";
import { Form, Icon, Input, Button, Typography, Layout, Row } from "antd";
import { NavLink } from 'react-router-dom';

const { Title } = Typography;
const { Content } = Layout;

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <StyledContent>
        <StyledRow type="flex" justify="center">
          <Title>Login</Title>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon
                      type="user"
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon
                      type="lock"
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Login
              </Button>
              <NavLink to="/signup"> or signup now</NavLink>
            </Form.Item>
          </Form>
        </StyledRow>
      </StyledContent>
    );
  }
}

const Login = Form.create({ name: "normal_login" })(NormalLoginForm);
export default Login;


const StyledContent = styled(Content)`
  max-width: 960px;
  margin: 0 auto;
  margin-top: 20vh;
`;

const StyledRow = styled(Row)`
  flex-direction: column;
`;