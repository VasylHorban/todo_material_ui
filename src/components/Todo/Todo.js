import React, { useState } from 'react';
import { Container } from '@material-ui/core';

import Form from './Form';
import TodoList from './TodoList';
const Todo = () => {
  const [todos, setTodos] = useState([
    { id: '123', text: 'some task', isComplited: false },
  ]);

  const setNewTask = (value) => {
    setTodos([{ id: Date.now(), text: value, isComplited: false }, ...todos]);
  };

  const deleteTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const switchChecked = (id) => {
    setTodos([
      ...todos.map((todo) => {
        if (todo.id === id) {
          todo.isComplited = !todo.isComplited;
          return todo;
        }
        return todo;
      }),
    ]);
  };

  return (
    <Container maxWidth="sm">
      <Form setNewTask={setNewTask} />
      <TodoList
        todos={todos}
        deleteTask={deleteTask}
        switchChecked={switchChecked}
      />
    </Container>
  );
};

export default Todo;
