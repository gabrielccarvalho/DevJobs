import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #24292d;
`;

export const Form = styled.form`
  height: 500px;
  width: 450px;
  padding: 20px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  border-radius: 22px;
  background-color: #ffffff;
  -webkit-box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.72);
  box-shadow: -2px 10px 29px 0px rgba(0, 0, 0, 0.72);
  animation-name: FadeIn;
  animation-duration: 600ms;

  small {
    font-size: 16px;
    font-weight: 400;
    font-family: sans-serif;
  }

  h6 {
    font-size: 14px;
    font-weight: 300;
    font-family: sans-serif;
  }

  br {
    margin-top: 10px;
  }

  img {
    width: 55px;
    height: 55px;
    cursor: pointer;
  }

  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    color: #777;
    font-size: 15px;
    width: 60%;
    border: 0px;
    outline: 0;
    transition: all 500ms ease-in-out;
    border-bottom: 1px solid #c3cad9;
    text-align: center;

    &:focus {
      width: 80%;
      border-bottom: 2px solid #50d878;
    }

    &:invalid {
      border-bottom: 2px solid red;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  div {
    margin-top: 20px;
  }

  button {
    color: #50d878;
    font-size: 20px;
    font-weight: bold;
    background: #fff;
    height: 50px;
    width: 60%;
    border: 1px solid #50d878;
    border-radius: 28px;
    margin-top: 30px;
    transition: 500ms;
    &:hover {
      color: #fff;
      background: #50d878;
      width: 80%;
    }

    &:focus {
      outline-width: 0;
    }
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

export const Message = styled.h6`
  font-size: 16px;
  font-weight: 300;
  font-family: sans-serif;
  color: red;
`;
