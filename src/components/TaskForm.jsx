import React from 'react';
import styled from 'styled-components';
import Button from '../layout/Button.jsx';
import {colors} from '../config/variables.js';

const Container = styled.div`
  margin: 0 -1rem;
  margin-bottom: 2rem;

  .buttons {
    display: flex;
    margin: 2rem 0;
  }

  input {
    outline: none;
    border: none;
    width: 100%;
    background: ${colors.grey_050};
    border: 1px solid ${colors.grey_800};
    color: ${colors.grey_800};
    border-radius: .5rem;
    padding: .5rem;
    font-size: 1.8rem;
  }

  hr {
    background: ${colors.grey_900};
  }
`;

class TaskForm extends React.Component {
  render() {
    return (
      <Container>
        <input placeholder="Type your task" />
        <div className="buttons">
          <Button>DO</Button>
          <Button>DEFER</Button>
          <Button>DELEGATE</Button>
          <Button>DELETE</Button>
        </div>
        <hr />
      </Container>
    );
  }
}

export default TaskForm;
