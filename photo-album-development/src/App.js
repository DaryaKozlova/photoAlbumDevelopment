import React from 'react';
import { Container, Grid } from '@material-ui/core';

import './App.css';
import Menu from './components/Menu';

const App = () => {
  const [menuActiveTab, setMenuActiveTab] = React.useState(0);

  return (
    <Grid container>
      <Menu value={menuActiveTab} handleChange={setMenuActiveTab} />
    </Grid>
  );
}

export default App;
