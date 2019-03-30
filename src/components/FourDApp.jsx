import React from 'react';
import TaskForm from './TaskForm.jsx';
import DOCategory from './DoCategory.jsx';
import Category from './Category.jsx';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 375px;

  @media only screen and (max-width: 600px) {
    width: 375px;
    padding: 1rem;
  }
`;

const tasks = [
  {
    name: "Meet with the boss",
    type: "delegate",
  },
  {
    name: "sdsdsdadsadasdjfhsjdhfkshkfhdskf",
    type: "delegate"
  },
  {
    name: "ASAs",
    type: "defer",
  }
]

class FourDApp extends React.Component {
  render() {
    return (
      <Container>
        <TaskForm />
        <DOCategory tasks={tasks.filter(task => task.type === "do")}  />
        <Category tasks={tasks.filter(task => task.type === "delegate")}  name="Delegate" />
        <Category  tasks={tasks.filter(task => task.type === "defer")}  name="Defer" />
        <Category tasks={tasks.filter(task => task.type === "delete")} name="Delete" />
        <Category tasks={tasks.filter(task => task.type === "completed")} name="Completed" />
      </Container>
    );
  }
}

export default FourDApp;
