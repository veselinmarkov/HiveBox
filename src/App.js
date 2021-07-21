import React from 'react';
import {Container, Grid, Paper, CssBaseline, Chip} from '@material-ui/core';
import { HomeOutlined, HighlightOffOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';

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
  control: {
    padding: theme.spacing(2),
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
}));

export default function App() {
  const [user, setUser] = React.useState({ id:"Guest" });
  const classes = useStyles();
  const handleUser = () => {};
  
  const handleItemDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <Container component="main" maxWidth="lg" className={classes.rootContainer}>
      <CssBaseline />
      <Navbar user={user} updateUser={handleUser}/>
      {/*
      <section>Section field
        <aside>Aside field</aside>
      </section>
      */}
      <Grid container className={classes.container} spacing={1}>
        <Grid item ><Paper style={{padding: 10}}>
          <Grid container className={classes.sidebar} spacing={1}>
          <Grid item ><Chip 
            icon={<HomeOutlined />} 
            label="Old Hive in the back yard"
            clickable
            color="primary"
            deleteIcon={<HighlightOffOutlined/>} 
            onDelete={handleItemDelete}/>
          </Grid>
          <Grid item ><Chip 
            icon={<HomeOutlined />} 
            label="New Hive #1 in the front"
            clickable
            color="primary"
            deleteIcon={<HighlightOffOutlined/>} 
            onDelete={handleItemDelete}/>
          </Grid>
          <Grid item ><Chip 
            icon={<HomeOutlined />} 
            label="New Hive #2 in the front"
            clickable
            color="secondary"
            deleteIcon={<HighlightOffOutlined/>}  
            onDelete={handleItemDelete}/>
            </Grid>
          </Grid>
        </Paper></Grid>
        <Grid item className={classes.main}><Paper className={classes.mainPaper}>Section field</Paper></Grid>
      </Grid>
    </Container>
  );
}
