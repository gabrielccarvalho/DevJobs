import React, { useState } from 'react';

import { Container } from './styles';

export default function Login() {
  const [emailSelected, setEmailSelected] = useState(false);
  const [email, setEmail] = useState('');
  const [senhaSelected, setSenhaSelected] = useState(false);
  const [senha, setSenha] = useState('');
  return (
    <>
      <Container>
        <form>
          <br></br>
          <div>
            <img src="https://i.imgur.com/3ZMAPsP.png" />
          </div>
          <br></br>
          <small>Log In to DevJobs</small>
          <br></br>
          <br></br>
          <br></br>
          <input
            onFocus={() => {
              setEmailSelected(true);
            }}
            onBlur={() => {
              setEmailSelected(false);
            }}
            type="email"
            placeholder={emailSelected ? '' : 'Email'}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            onFocus={() => {
              setSenhaSelected(true);
            }}
            onBlur={() => {
              setSenhaSelected(false);
            }}
            type="password"
            placeholder={senhaSelected ? '' : 'Senha'}
            onChange={e => setSenha(e.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
        <br></br>
        <br></br>
        <form className="register">
          <small>New to DevJobs?</small> <a href="">Create an account</a>
          <small>.</small>
        </form>
      </Container>
    </>
  );
}
