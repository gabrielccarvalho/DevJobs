import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { Header } from './styles';

class Main extends Component {
  state = {};

  render() {
    return (
      <>
        <Header>
          <img
            src="https://i.imgur.com/HeHGCIw.png"
            alt="logo"
            onClick={() => this.props.history.push('/')}
          />
        </Header>
      </>
    );
  }
}

export default withRouter(Main);
