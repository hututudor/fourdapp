import React, {useState, useEffect} from 'react';
import TaskForm from './TaskForm.jsx';
import DoCategory from './DoCategory.jsx';
import Category from './Category.jsx';
import Modal from '../layout/Modal';
import styled from 'styled-components';
import uuidv4 from 'uuid/v4';

const Container = styled.div`
  min-width: 375px;
  padding: 2rem 0;
  transition: all 0.2s;

  @media only screen and (max-width: 600px) {
    width: 375px;
    padding: 2rem 1rem;
  }

  &.blur {
    filter: blur(8px) grayscale(100%);
  }
`;

export default function FourDApp() {
  const [tasks, setTasks] = useState([]);
  const [doModal, setDoModal] = useState(false);

  const addNewTask = (name, type) => {
    if (type === 'do' && tasks.filter(task => task.type === 'do' && task.completed === false).length >= 3) {
      setTasks(
        tasks.concat({
          name,
          type: 'defer',
          id: uuidv4(),
          completed: false,
        }),
      );

      showDoModal();
      return;
    }

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

  const showDoModal = () => {
    setDoModal(true);

    setTimeout(() => {
      setDoModal(false);
    }, 2000);
  };

  return (
    <React.Fragment>
      <Modal
        show={doModal}
        title="You can add only 3 items in the Do category"
        description="The task has been added in the Defer category"
      />
      <Container className={doModal ? 'blur' : ''}>
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
    </React.Fragment>
  );
}
