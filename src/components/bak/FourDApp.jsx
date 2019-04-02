import React, {useState, useEffect} from 'react';
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

export default function FourDApp() {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (name, type) => {
    setTasks(
      tasks.concat({
        name,
        type,
        id: uuidv4(),
        completed: false,
      }),
    );
  };

  const complete = id => {
    let index = tasks.findIndex(task => task.id === id);

    if (index === -1) {
      return;
    }

    let copy = [...tasks];
    copy[index].completed = true;

    setTasks(copy);
  };

  return (
    <Container>
      <TaskForm addNewTask={addNewTask} />
      <DoCategory
        complete={complete}
        tasks={tasks.filter(task => task.type === 'do')}
      />
      <Category
        complete={complete}
        tasks={tasks.filter(task => task.type === 'delegate')}
        name="Delegate"
      />
      <Category
        complete={complete}
        tasks={tasks.filter(task => task.type === 'defer')}
        name="Defer"
      />
      <Category
        complete={complete}
        tasks={tasks.filter(task => task.type === 'delete')}
        name="Delete"
      />
      <Category
        complete={complete}
        tasks={tasks.filter(task => task.completed === true)}
        name="Completed"
      />
    </Container>
  );
}
