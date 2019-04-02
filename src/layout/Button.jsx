import React from 'react';
import styled, {css} from 'styled-components';
import {colors} from '../config/variables.js';

const Btn = styled.button`
  outline: none;
  border: none;
  flex-grow: 1;
  background: ${colors.grey_100};
  padding: 0.5rem 2rem;
  font-size: 2rem;
  border-radius: 0.4rem;

  ${props =>
    props.disabled &&
    css`
    background: ${colors.grey_050};
    color; ${colors.grey_500};
  `}

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:active {
    background: ${colors.grey_300};
  }
`;

export default function Button(props) {
  return (
    <Btn disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </Btn>
  );
}
