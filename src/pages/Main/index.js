import React from 'react';

import { logout } from '../../services/auth';

import {} from './styles';

export default function Main() {
  return (
    <button type="button" onClick={() => logout()}>
      Logout
    </button>
  );
}
