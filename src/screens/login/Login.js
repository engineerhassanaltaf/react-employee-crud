import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: 'admin@domain.com',
      password: 'admin'
    };
  }

  onUserNameChanged(e) {
    this.setState({ userName: e.target.value });
  }

  onPasswordChanged(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    const { userName, password } = this.state;
    return (
      <div>
        <input onChange={(e) => this.onUserNameChanged(e)} placeholder="First Name" value={userName} />
        <input onChange={(e) => this.onPasswordChanged(e)} placeholder="Last Name" value={password} />

        <button onClick={() => this.props.onLoginButtonClick(userName, password)}>Login</button>
      </div>
    )
  }
}

export default Login;