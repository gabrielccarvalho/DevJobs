import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { Header, Form } from './styles';

class Main extends Component {
  state = {
    search: '',

    searchSelected: false,
  };

  handleSearch() {}

  render() {
    return (
      <>
        <Header>
          <img
            src="https://i.imgur.com/HeHGCIw.png"
            alt="logo"
            onClick={() => this.props.history.push('/')}
          />
          <Form onSubmit={this.handleSearch}>
            <input
              onFocus={() => {
                this.setState({ searchSelected: true });
              }}
              onBlur={() => {
                this.setState({ searchSelected: false });
              }}
              type="text"
              spellCheck="false"
              autocapitalize="none"
              placeholder={
                this.state.searchSelected ? '' : 'Search users or companies'
              }
              onChange={e => this.setState({ search: e.target.value })}
            />
          </Form>
        </Header>
      </>
    );
  }
}

export default withRouter(Main);
