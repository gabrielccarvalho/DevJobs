import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import RegisterProvider from '../../providers/RegisterProvider';

import { Container, Form, CompanyForm, Message } from './styles';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    cpf: '',

    error: '',

    nameSelected: false,
    emailSelected: false,
    passwordSelected: false,
    cpfSelected: false,
  };

  handleRegister = async e => {
    e.preventDefault();
    const { name, email, password, cpf } = this.state;
    if (!name || !email || !password || !cpf) {
      this.setState({
        error: 'Fill the email and password fields to keep going!',
      });
    } else {
      this.setState({ error: '' });
      try {
        const RProvider = new RegisterProvider();
        const response = await RProvider.register(name, email, password, cpf);
        console.log(response.data);
        this.props.history.push('/');
      } catch (err) {
        console.log(err);
      }
    }
  };

  render() {
    return (
      <>
        <Container>
          <Form onSubmit={this.handleRegister}>
            <br></br>
            <div>
              <img src="https://i.imgur.com/3ZMAPsP.png" alt="logo" />
            </div>
            <br></br>
            <small>Sign Up to DevJobs</small>
            <br></br>
            <br></br>
            <br></br>
            <input
              onFocus={() => {
                this.setState({ nameSelected: true });
              }}
              onBlur={() => {
                this.setState({ nameSelected: false });
              }}
              type="text"
              spellCheck="false"
              autocapitalize="none"
              placeholder={this.state.nameSelected ? '' : 'Name'}
              onChange={e => this.setState({ name: e.target.value })}
            />
            <input
              onFocus={() => {
                this.setState({ emailSelected: true });
              }}
              onBlur={() => {
                this.setState({ emailSelected: false });
              }}
              type="email"
              spellCheck="false"
              autocapitalize="none"
              placeholder={this.state.emailSelected ? '' : 'Email'}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              onFocus={() => {
                this.setState({ cpfSelected: true });
              }}
              onBlur={() => {
                this.setState({ cpfSelected: false });
              }}
              type="number"
              spellCheck="false"
              autocapitalize="none"
              placeholder={this.state.cpfSelected ? '' : 'Cpf'}
              onChange={e => this.setState({ cpf: e.target.value })}
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
              autocapitalize="none"
              placeholder={this.state.passwordSelected ? '' : 'Password'}
              onChange={e => this.setState({ password: e.target.value })}
            />
            {this.state.error ? <Message>{this.state.error}</Message> : ''}
            <button type="submit">Register</button>
          </Form>
          <br></br>
          <br></br>
          <CompanyForm>
            <small>Are you a company?</small>{' '}
            <a href="/Contact-us">Talk to us</a>
            <small>.</small>
          </CompanyForm>
        </Container>
      </>
    );
  }
}

export default withRouter(Register);
