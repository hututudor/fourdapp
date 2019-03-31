import React from 'react';
import TaskForm from './TaskForm.jsx';
import DoCategory from './DoCategory.jsx';
import Category from './Category.jsx';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';

const Container = styled.div`
  min-width: 375px;
  padding: 2rem 0;

  @media only screen and (max-width: 600px) {
    width: 375px;
    padding: 2rem 1rem;
  }
`;

class FourDApp extends React.Component {
  state = {
    tasks: [],
  };

  addNewTask = (name, type) => {
    this.setState({
      tasks: this.state.tasks.concat({
        name,
        type,
        id: uuidv4(),
        completed: false,
      }),
    });
  };

  complete = id => {
    let index = this.state.tasks.findIndex(task => task.id === id);

    if (index === -1) {
      return;
    }

    let copy = [...this.state.tasks];
    copy[index].completed = true;

    this.setState({
      tasks: copy,
    });
  };

  render() {
    const {tasks} = this.state;

    return (
      <Container>
        <TaskForm addNewTask={this.addNewTask} />
        <DoCategory
          complete={this.complete}
          tasks={tasks.filter(task => task.type === 'do')}
        />
        <Category
          complete={this.complete}
          tasks={tasks.filter(task => task.type === 'delegate')}
          name="Delegate"
        />
        <Category
          complete={this.complete}
          tasks={tasks.filter(task => task.type === 'defer')}
          name="Defer"
        />
        <Category
          complete={this.complete}
          tasks={tasks.filter(task => task.type === 'delete')}
          name="Delete"
        />
        <Category
          complete={this.complete}
          tasks={tasks.filter(task => task.completed === true)}
          name="Completed"
        />
      </Container>
    );
  }
}

export default FourDApp;
