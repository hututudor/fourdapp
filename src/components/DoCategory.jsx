import React from 'react';
import Task from './Task.jsx';
import styled from 'styled-components';
import {colors} from '../config/variables.js';

const H = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;
const Container = styled.div`
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.6rem;
    text-align: center;
    color: ${colors.grey_700};
  }
`;

export default function DoCategory(props) {
  return (
    <Container>
      <H>Do</H>
      <div className="tasks">
        {props.tasks.filter(task => task.completed === false).length === 0 ? (
          <h2>Congratulations! You are very efficient.</h2>
        ) : null}
        {props.tasks.map(
          (task, index) =>
            !task.completed && (
              <Task
                id={task.id}
                completed={task.completed}
                complete={props.complete}
                key={index}>
                {task.name}
              </Task>
            ),
        )}
      </div>
    </Container>
  );
}
