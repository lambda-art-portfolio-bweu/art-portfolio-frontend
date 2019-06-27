import React from "react";
import { Form, Icon, Input, Button } from "antd";
import { registerArtist } from '../actions/artist';
import { connect } from "react-redux";

class NormalLoginForm extends React.Component {


  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        alert(err);
      } else {
          values = {
              ...values,
            // Add default values
            artistName: "",
            profilePictureUrl: "",
            artistDescription: ""
          };
        this.props.registerArtist(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div
        style={{
          padding: "10vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("email", {
              rules: [
                { required: true, message: "Please input your email." }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
              />
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
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
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
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
            Or <a href="">login!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const Signup = Form.create({ name: "normal_login" })(NormalLoginForm);

export default connect(null, { registerArtist })(Signup);
