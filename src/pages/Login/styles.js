import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
`;

export const Form = styled.form`
  height: 450px;
  width: 450px;
  padding: 20px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: #ffffff;
  -webkit-box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.72);
  box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.72);
  animation-name: FadeIn;
  animation-duration: 600ms;

  small {
    font-size: 16px;
    font-weight: 300;
    font-family: sans-serif;
  }

  br {
    margin-top: 20px;
  }

  img {
    width: 55px;
    height: 55px;
  }

  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    color: #777;
    font-size: 15px;
    width: 80%;
    border: 0px;
    outline: 0;
    transition: all 0s ease-in-out;
    border-bottom: 1px solid #c3cad9;
  }

  input:focus {
    border-bottom: 2px solid #50d878;
  }

  button {
    color: white;
    font-size: 20px;
    font-weight: bold;
    background: #50d878;
    height: 50px;
    width: 80%;
    border: 0;
    border-radius: 5px;
    margin-top: 25px;
  }

  @keyframes FadeIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const RegisterForm = styled.form`
  height: 60px;
  width: 450px;
  padding: 20px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: #ffffff;
  -webkit-box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.72);
  box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.72);
  animation-name: MoveFromRight;
  animation-duration: 1s;
  animation-delay: 600ms;
  animation-fill-mode: backwards;

  a {
    font-size: 16px;
    font-weight: 300;
    font-family: sans-serif;
    text-decoration: none;
    color: blue;
  }

  small {
    font-size: 16px;
    font-weight: 300;
    font-family: sans-serif;
  }

  @keyframes MoveFromRight {
    from {
      opacity: 0;
      transform: translateX(50%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;

export const Message = styled.h6`
  font-size: 16px;
  font-weight: 300;
  font-family: sans-serif;
  color: red;
`;
