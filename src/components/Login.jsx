import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginArtist } from '../actions/artists';
import styled from 'styled-components';
import { Form, Icon, Input, Button, Typography, Layout, Row, message } from 'antd';

const { Title } = Typography;
const { Content } = Layout;

const NormalLoginForm = (props)  => {
  useEffect(() => {
    if(props.error) {
      message.error(props.error)
    }
  }, [props.error])
  useEffect(()=> {
    if (props.loggedIn) {
      props.history.push('/')
    }
  }, [props.loggedIn])

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (err) {
        return null;
      } else {
        props.loginArtist(values);
      }
    });
  };

    const { getFieldDecorator } = props.form
    return (
      <StyledContent>
        <StyledRow type="flex" justify="center">
          <Title>Login</Title>
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  { required: true, message: 'Please input your username!' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input your Password!' }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
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
              <Link to="/signup"> or signup now</Link>
            </Form.Item>
          </Form>
        </StyledRow>
      </StyledContent>
    );
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);
const mapStateToProps = state => ({
  error: state.artistsReducer.error,
  loggedIn: state.artistsReducer.loggedIn,
  loggingIn: state.artistsReducer.loggingIn
})
export default connect(
  mapStateToProps,
  { loginArtist }
)(Login);

const StyledContent = styled(Content)`
  max-width: 960px;
  margin: 0 auto;
  margin-top: 20vh;
`;

const StyledRow = styled(Row)`
  flex-direction: column;
`;
