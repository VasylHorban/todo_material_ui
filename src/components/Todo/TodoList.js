import React from 'react';
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Button,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = ({ todos, switchChecked, deleteTask }) => (
  <List>
    {todos.map((todo) => (
      <Paper key={todo.id}>
        <ListItem>
          <ListItemIcon>
            <Checkbox
              color="primary"
              checked={todo.isComplited}
              onChange={switchChecked.bind(null, todo.id)}
            ></Checkbox>
          </ListItemIcon>
          <ListItemText>
            <Typography color={todo.isComplited ? 'primary' : 'inherit'}>
              {todo.text}
            </Typography>
          </ListItemText>
          <Button onClick={deleteTask.bind(null, todo.id)}>
            <DeleteIcon />
          </Button>
        </ListItem>
      </Paper>
    ))}
  </List>
);

export default TodoList;
