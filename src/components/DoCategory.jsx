import React from 'react';
import Task from './Task.jsx';
import styled from 'styled-components';

const H = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`
const Container = styled.div`
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`

class DoCategory extends React.Component {
  render() {
    return (
      <Container>
        <H>DO</H>
        <Task>Meet with the boss</Task>
      </Container>
    );
  }
}

export default DoCategory;
