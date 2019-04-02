import React, {useState} from 'react';
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
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 1.8rem;
  }

  hr {
    background: ${colors.grey_900};
  }
`;

export default function TaskForm(props) {
  const [input, setInput] = useState('');

  const add = type => {
    if (input) {
      props.addNewTask(input, type);
      setInput('');
    }
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <Container>
      <input
        value={input}
        onChange={handleChange}
        placeholder="Type your task"
      />
      <div className="buttons">
        <Button disabled={!input} onClick={() => add('do')}>
          DO
        </Button>
        <Button disabled={!input} onClick={() => add('delegate')}>
          DELEGATE
        </Button>
        <Button disabled={!input} onClick={() => add('defer')}>
          DEFER
        </Button>
        <Button disabled={!input} onClick={() => add('delete')}>
          DELETE
        </Button>
      </div>
      <hr />
    </Container>
  );
}
