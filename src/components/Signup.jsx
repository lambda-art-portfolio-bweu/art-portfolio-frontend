import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { registerArtist } from '../actions/artists';
import styled from 'styled-components';
import { Form, Icon, Input, Button, Typography, Layout, Row } from 'antd';

const { Title } = Typography;
const { Content } = Layout;

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return null;
      } else {
        values = {
          ...values,
          // Add default values
          artistName: 'Default Name',
          profilePictureUrl:
            'http://image.noelshack.com/fichiers/2019/27/2/1562055851-capture-d-ecran-du-2019-07-02-10-23-48.png',
          artistDescription: 'Default Description'
        };
        this.props.registerArtist(values);
        this.props.history.push('/login');
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <StyledContent>
        <StyledRow type="flex" justify="center">
          <Title>Signup</Title>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email.' }]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="Email"
                />
              )}
            </Form.Item>

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

            {/* <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please confirm password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Confirm Password"
              />
            )}
          </Form.Item> */}

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Signup
              </Button>
              <NavLink to="/login"> or login now</NavLink>
            </Form.Item>
          </Form>
        </StyledRow>
      </StyledContent>
    );
  }
}

const Signup = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default connect(
  null,
  { registerArtist }
)(Signup);

const StyledContent = styled(Content)`
  max-width: 960px;
  margin: 0 auto;
  margin-top: 20vh;
`;

const StyledRow = styled(Row)`
  flex-direction: column;
`;
