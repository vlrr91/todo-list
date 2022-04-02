import React, { useContext } from 'react';
import { TodoContext } from '../../context';
import { StateTask } from '../../models/TodoContext';
import { Container, List, Item } from './styles';

const states = [StateTask.ALL, StateTask.ACTIVE];

export default function StateTabs() {
  const { filterState, setFilterState } = useContext(TodoContext);

  function handleSelectedState(state: StateTask) {
    setFilterState(state);
  }

  return (
    <Container>
      <List>
        {states.map((state) => {
          return (
            <Item
              key={state}
              onClick={() => handleSelectedState(state)}
              selected={filterState === state}
            >
              {state}
            </Item>
          );
        })}
      </List>
    </Container>
  );
}
