import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import ContactProvider from '../../providers/ContactProvider';

import { Container, Form, Message } from './styles';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    phoneNumber: '',

    error: '',

    nameSelected: false,
    emailSelected: false,
    phoneNumberSelected: false,
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { name, email, phoneNumber } = this.state;
    if (!email || !phoneNumber || !name) {
      this.setState({
        error: 'You need to fill everything to keep going!',
      });
    } else {
      this.setState({ error: '' });
      try {
        const CProvider = new ContactProvider();
        const response = await CProvider.contact(name, email, phoneNumber);
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
          <Form onSubmit={this.handleSubmit}>
            <div>
              <img
                src="https://i.imgur.com/3ZMAPsP.png"
                alt="logo"
                onClick={() => this.props.history.push('/')}
              />
            </div>
            <br></br>
            <small>We'd love to know more about your company!</small>
            <div>
              <h6>Please, leave your name, e-mail and phone number</h6>
              <h6>So we can talk better</h6>
            </div>
            <div>
              <input
                onFocus={() => {
                  this.setState({ nameSelected: true });
                }}
                onBlur={() => {
                  this.setState({ nameSelected: false });
                }}
                type="text"
                spellCheck="false"
                autoCapitalize="none"
                pattern="[^0-9]+"
                placeholder={this.state.nameSelected ? '' : 'Name'}
                onChange={e => this.setState({ name: e.target.value })}
              />
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
                autoCapitalize="none"
                placeholder={this.state.emailSelected ? '' : 'Email'}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <br></br>
              <input
                onFocus={() => {
                  this.setState({ phoneNumberSelected: true });
                }}
                onBlur={() => {
                  this.setState({ phoneNumberSelected: false });
                }}
                type="tel"
                spellCheck="false"
                pattern="[^a-zA-Z]+"
                placeholder={
                  this.state.phoneNumberSelected ? '' : 'Phone number'
                }
                onChange={e => this.setState({ phoneNumber: e.target.value })}
              />
              {this.state.error ? <Message>{this.state.error}</Message> : ''}
              <button type="submit">Send</button>
            </div>
          </Form>
        </Container>
      </>
    );
  }
}

export default withRouter(Contact);
