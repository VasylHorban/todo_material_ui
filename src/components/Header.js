import React from 'react'
import { Toolbar, Typography, AppBar } from '@material-ui/core';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">Todo app</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
