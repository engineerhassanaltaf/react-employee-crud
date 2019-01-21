import React, { Component } from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  onEmailChanged(e) {
    this.setState({ email: e.target.value });
  }

  onPasswordChanged(e) {
    this.setState({ password: e.target.value });
  }

  onLoginButtonClick() {
    const { email, password } = this.state;
    this.props.onLoginButtonClick(email, password);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(this.state.email !== nextState.email || this.state.password !== nextState.password);
  }

  render() {
    return (
      <div>
        <h1>Employee Management System</h1>
        <Form horizontal >
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={1}>
              Email
            </Col>
            <Col sm={3}>
              <FormControl type="email" placeholder="Email" onChange={(e) => this.onEmailChanged(e)} />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={1}>
              Password
            </Col>
            <Col sm={3}>
              <FormControl type="password" placeholder="Password" onChange={(e) => this.onPasswordChanged(e)} />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={1} sm={2}>
              <Button bsStyle="primary" onClick={() => this.onLoginButtonClick()} >Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Login;