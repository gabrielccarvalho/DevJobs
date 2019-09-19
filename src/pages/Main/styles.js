import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 64px;
  width: 100vw;
  background-color: #24292d;
  align-items: center;
  padding-left: 20px;

  img {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }

  input {
    width: 320px;
    height: 30px;
    border-radius: 4px;
    border: 0px;
    background-color: rgba(66, 69, 74, 1);
    padding: 10px;
    transition: 500ms ease-out;

    &:focus {
      width: 480px;
      background-color: white;
      animation-name: expand;
      animation-duration: 500ms;
    }
  }

  @keyframes expand {
    from {
      width: 320px;
      background-color: rgba(66, 69, 74, 1);
    }
    to {
      width: 480px;
      background-color: white;
    }
  }

  @keyframes short {
    from {
      width: 480px;
      background-color: white;
    }
    to {
      width: 320px;
      background-color: rgba(66, 69, 74, 1);
    }
  }
`;

export const Form = styled.form`
  padding: 20px;
`;
