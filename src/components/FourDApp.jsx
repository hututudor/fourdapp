import React, {useState, useEffect} from 'react';
import TaskForm from './TaskForm.jsx';
import DoCategory from './DoCategory.jsx';
import Category from './Category.jsx';
import Modal from '../layout/Modal';
import Chart from './Chart.jsx';
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

const ChartContainer = styled.div`
  padding: 9rem !important;

  @media only screen and (max-width: 600px) {
    padding: 0;
  }

  h1 {
    text-align: center;
  }
`;

export default function FourDApp() {
  const [tasks, setTasks] = useState([]);
  const [doModal, setDoModal] = useState(false);
  const [chartData, setChartData] = useState([]);

  const addNewTask = (name, type) => {
    if (
      type === 'do' &&
      tasks.filter(task => task.type === 'do' && task.completed === false)
        .length >= 3
    ) {
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

  useEffect(() => {
    setChartData([
      {
        name: 'Do',
        value: tasks.filter(task => task.type === 'do').length,
      },
      {
        name: 'Delegate',
        value: tasks.filter(task => task.type === 'delegate').length,
      },
      {
        name: 'Defer',
        value: tasks.filter(task => task.type === 'defer').length,
      },
      {
        name: 'Delete',
        value: tasks.filter(task => task.type === 'delete').length,
      },
    ]);
  }, [tasks]);

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
      {chartData.filter(data => data.value > 0).length > 0 && (
        <ChartContainer>
          <h1>Tasks this week</h1>
          <Chart data={chartData} />
        </ChartContainer>
      )}
    </React.Fragment>
  );
}
