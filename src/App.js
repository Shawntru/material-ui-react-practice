import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DiscardIcon from '@material-ui/icons/Delete';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import { orange, blue } from '@material-ui/core/colors';

import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    background: 'red',
    border: 1,
    borderRadius: 10,
    color: 'white',
    padding: '10px 30px',
    marginBottom: '15px',
  },
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
    },
  },
  palette: {
    primary: {
      main: orange[400],
    },
    secondary: {
      main: blue[400],
    },
  },
});

const ButtonStyled = () => {
  const classes = useStyles();
  return <Button className={classes.root}>Stylized Button</Button>;
};

const CheckboxExample = () => {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox',
          }}
        />
      }
      label="The Checkbox"
    />
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">VIVID</Typography>
              </Toolbar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Learn how to use this shit
            </Typography>
            <ButtonStyled />
            <TextField
              variant="outlined"
              color="secondary"
              type="email"
              label="Your Email Address"
              placeholder="Enter email"
            />
            <Grid container spacing={5} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper
                  style={{
                    height: 75,
                    width: '100%',
                  }}
                />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper
                  style={{
                    height: 75,
                    width: '100%',
                  }}
                />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper
                  style={{
                    height: 75,
                    width: '100%',
                  }}
                />
              </Grid>
            </Grid>
            <CheckboxExample />
            <ButtonGroup variant="contained">
              <Button
                // href="dreamjournal"
                startIcon={<SaveIcon />}
                size="large"
                style={{
                  fontSize: 16,
                }}
                color="primary"
              >
                Save
              </Button>
              <Button
                startIcon={<DiscardIcon />}
                size="large"
                style={{
                  fontSize: 16,
                }}
                color="secondary"
              >
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
