import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import LoginProvider from '../../providers/LoginProvider';
import { login } from '../../services/auth';

import { Container, Form, RegisterForm, Message } from './styles';

class Login extends Component {
  state = {
    email: '',
    password: '',

    error: '',

    emailSelected: false,
    passwordSelected: false,
  };

  handleLogin = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({
        error: 'Fill the email and password fields to keep going!',
      });
    } else {
      this.setState({ error: '' });
      try {
        const LProvider = new LoginProvider();
        const response = await LProvider.login(email, password);
        console.log(response.data);
        await login(response.data.token, response.data.user);
        this.props.history.push('/');
      } catch (err) {
        this.setState({
          error:
            'Please, verify if you typed your email and password correctly',
        });
        console.log(err);
      }
    }
  };

  render() {
    return (
      <>
        <Container>
          <Form onSubmit={this.handleLogin}>
            <br></br>
            <div>
              <img src="https://i.imgur.com/3ZMAPsP.png" alt="logo" />
            </div>
            <br></br>
            <small>Log In to DevJobs</small>
            <br></br>
            <br></br>
            <br></br>
            <input
              onFocus={() => {
                this.setState({ emailSelected: true });
              }}
              onBlur={() => {
                this.setState({ emailSelected: false });
              }}
              type="email"
              spellCheck="false"
              placeholder={this.state.emailSelected ? '' : 'Email'}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              onFocus={() => {
                this.setState({ passwordSelected: true });
              }}
              onBlur={() => {
                this.setState({ passwordSelected: false });
              }}
              type="password"
              spellCheck="false"
              placeholder={this.state.passwordSelected ? '' : 'Password'}
              onChange={e => this.setState({ password: e.target.value })}
            />
            {this.state.error ? <Message>{this.state.error}</Message> : ''}
            <button type="submit">Sign In</button>
          </Form>
          <br></br>
          <br></br>
          <RegisterForm>
            <small>New to DevJobs?</small>{' '}
            <a href="/Register">Create an account</a>
            <small>.</small>
          </RegisterForm>
        </Container>
      </>
    );
  }
}

export default withRouter(Login);
