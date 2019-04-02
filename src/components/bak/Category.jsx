import React from 'react';
import Task from './Task.jsx';
import styled from 'styled-components';
import {colors} from '../config/variables.js';
import Chevron from '../layout/Chevron.jsx';

const H = styled.h1`
  font-size: 2rem;
  display: inline-block;
`;

const Button = styled.button`
  float: right;
  margin: .5rem;
  font-size: 1.8rem;
  padding: .1rem .5rem;
  transition: all .2s ease-out;
  border: none;
  outline: none;
  background: ${colors.grey_050}
  border-radius: .5rem;

  &.active {
    transform: rotate(-180deg);
  }

  &:hover {
    background: ${colors.grey_100}
  }
`;

const Container = styled.div`
  border: 1px solid ${colors.grey_900};
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  margin-bottom: 1rem;

  .tasks {
    width: 100%;
  }
`;

class Category extends React.Component {
  state = {
    show: false,
  };

  changeShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  canTaskBeShown(task) {
    if (
      task.completed === true &&
      this.props.name.toLowerCase() === 'completed'
    ) {
      return true;
    } else if (task.completed === true) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <Container>
        <span>
          <H>{this.props.name}</H>
          <Button
            className={this.state.show ? 'active' : ''}
            onClick={this.changeShow}>
            <Chevron />
          </Button>
        </span>
        {this.state.show && (
          <div className="tasks">
            {this.props.tasks.map(
              (task, index) =>
                this.canTaskBeShown(task) && (
                  <Task
                    id={task.id}
                    completed={task.completed}
                    complete={this.props.complete}
                    key={index}>
                    {task.name}
                  </Task>
                ),
            )}
          </div>
        )}
      </Container>
    );
  }
}

export default Category;
