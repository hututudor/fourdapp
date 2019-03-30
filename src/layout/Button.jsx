import React from 'react';
import styled from 'styled-components'
import {colors} from '../config/variables.js';

const Btn = styled.button`
  outline: none;
  border: none;
  flex-grow: 1;
  background-color: ${colors.grey_100};
  padding: .5rem 2rem;
  font-size: 2rem;
  border-radius: .4rem;
  
  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:active {
    background: ${colors.grey_300};
  }
`

const Button = (props) => <Btn>{props.children}</Btn>

export default Button;
