import React from 'react';
import {colors} from '../config/variables.js';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 1rem;
  margin: 1rem;
  width: 100%;

  span {
    background: ${colors.grey_700};
    padding: 0.8rem 1rem;
    border-radius: 0.4rem 0 0 0.4rem;

    @media only screen and (max-width: 600px) {
      padding: 0.8rem 1rem;
    }
  }

  h1 {
    background: ${colors.grey_100};
    padding: 0.5rem 1rem;
    border-radius: 0 0.4rem 0.4rem 0;
    width: 80%;
    font-size: 1.6rem;
    font-weight: 400;
    display: inline-block;
  }

  input {
    background: ${colors.grey_100};
    border: none;
    outline: none;
  }
`;

class Task extends React.Component {
  render() {
    return (
      <Container>
        <span>
          <input onClick={() => this.props.complete(this.props.id)} checked={this.props.completed} type="checkbox" />
        </span>
        <h1>{this.props.children}</h1>
      </Container>
    );
  }
}

export default Task;
