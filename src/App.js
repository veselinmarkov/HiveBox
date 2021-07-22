import React from 'react';
import {Container, Grid, Paper, CssBaseline, Chip, Avatar, Card, CardHeader, 
  IconButton, Typography, CardActionArea} from '@material-ui/core';
import { HomeOutlined, HighlightOffOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import MyImage from './pictures/beehive.png'
import Control from './components/Control';

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    paddingTop: "0px", 
    border: "2px solid #e34d7d", 
    borderRadius: "7px",
    height: "100%"
  },
  container: {
    alignItems: "stretch",
    margin: "5px 0px 5px"
  },
  main: {
    flexGrow: 1,
  },
  mainPaper: {
    height: "100%"
  },
}));

export default function App() {
  const [user, setUser] = React.useState({ id:"Guest" });
  const [id, setId] = React.useState(null);
  const classes = useStyles();
  const handleUser = () => {};
  
  const handleIdChange = (id) => {
    setId(id);
  }

  const testUnitList = [
        {id: 1, text: "Bio Unit #1"},
        {id: 2, text: "Bio Unit #2"},
        {id: 3, text: "Bio Unit #3"},
    ]

  return (
    <Container component="main" maxWidth="lg" className={classes.rootContainer}>
      <CssBaseline />
      <Navbar user={user} updateUser={handleUser}/>
      <Grid container className={classes.container} spacing={1}>
        <Grid item >
          <Control id={id} unitList={testUnitList} handleIdChange={handleIdChange}/>
        </Grid>
        <Grid item className={classes.main}>
          <Paper className={classes.mainPaper}>
            <img alt="Beehive" src={MyImage}/>
            <p>Unit id {id} properties</p>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
