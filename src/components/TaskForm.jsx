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
  state = {
    input: ''
  }

  add = (type) => {
    if(this.state.input) {
      this.props.addNewTask(this.state.input, type);
      this.setState({input: ''})
    }
  }

  handleChange = e => {
    this.setState({input: e.target.value});
  }

  render() {
    return (
      <Container>
        <input value={this.state.input} onChange={this.handleChange}  placeholder="Type your task" />
        <div className="buttons">
          <Button disabled={!this.state.input} onClick={() => this.add('do')}>DO</Button>
          <Button disabled={!this.state.input} onClick={() => this.add('delegate')}>DELEGATE</Button>
          <Button disabled={!this.state.input} onClick={() => this.add('defer')}>DEFER</Button>
          <Button disabled={!this.state.input} onClick={() => this.add('delete')}>DELETE</Button>
        </div>
        <hr />
      </Container>
    );
  }
}

export default TaskForm;
