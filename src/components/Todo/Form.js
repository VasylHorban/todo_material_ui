import React, { useState } from 'react';
import { TextField, Button, Box } from '@material-ui/core';

const Form = ({setNewTask}) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (e) => {
      setInputValue(e.target.value)
  }

  const onClickeHanler = () => {
    let value = inputValue.trim()
    setInputValue('')
    if(value) setNewTask(value)
  }

  return (
    <form align="center" noValidate autoComplete="off">
      <Box marginTop="2rem">
        <TextField value = {inputValue} onChange = {onChangeHandler} id="standard-basic" label="new task" />
      </Box>
      <Box marginTop="1rem">
        <Button onClick = {onClickeHanler} variant="contained" color="secondary">
          add
        </Button>
      </Box>
    </form>
  );
};
export default Form;
