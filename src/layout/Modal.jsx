import React from 'react';
import styled from 'styled-components';
import {colors} from '../config/variables.js';

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  transition: all .5s;
  padding: 2rem;
  border-radius: 1rem;
  border: 2px solid ${colors.grey_900};
  background: ${colors.grey_050};
  font-size: 1.6rem;
  text-align: center;
  z-index: 100000;

  @media only screen and (max-width: 600px) {
    width: calc(100% - 4px);
  }

  &.show {
    display: block;
  }

  h1 {
    font-size: 1.8rem;
  }
`;

export default function Modal(props) {
  return (
    <Container className={props.show ? 'show' : ''}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </Container>
  );
}
