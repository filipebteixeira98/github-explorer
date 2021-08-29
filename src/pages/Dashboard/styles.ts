import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  max-width: 450px;
  margin-top: 80px;
  line-height: 56px;
  color: #3a3a3a;
  font-size: 48px;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  max-width: 700px;
  margin-top: 40px;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;
    border-radius: 5px 0 0 5px;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    color: #fff;
    font-weight: bold;
    border: 0;
    border-radius: 0 5px 5px 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  margin-top: 8px;
  color: #c53030;
`;

export const Repositories = styled.div`
  max-width: 700px;
  margin-top: 80px;

  a {
    display: block;
    width: 100%;
    padding: 24px;
    background: #fff;
    border-radius: 5px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin: 0 16px;

      strong {
        color: #3d3d4d;
        font-size: 20px;
      }

      p {
        margin-top: 4px;
        color: #a8a8b3;
        font-size: 18px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
