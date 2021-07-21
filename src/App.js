import React from 'react';
import {Container, Grid, Paper, CssBaseline, Chip, Avatar} from '@material-ui/core';
import { HomeOutlined, HighlightOffOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import MyImage from './pictures/beehive.png'

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
  sidebar: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    height: "100%",
    '& > *': {
      margin: theme.spacing(0.5),
    }
  },
  avatar: {
    width: "56px",
    height: "56px",
  }
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
      <Grid container className={classes.container} spacing={1}>
        <Grid item ><Paper className={classes.sidebar}>
          <Chip 
            avatar={<Avatar className={classes.avatar} alt="optional picture" src={MyImage}/>} 
            label="Old Hive in the back yard"
            clickable
            color="primary"
            deleteIcon={<HighlightOffOutlined/>} 
            onDelete={handleItemDelete}
            style={{height: "56px", width: "260px"}}/>
          <Chip 
            icon={<HomeOutlined />} 
            label="New Hive #1 in the front"
            clickable
            color="primary"
            deleteIcon={<HighlightOffOutlined/>} 
            onDelete={handleItemDelete}/>
          <Chip 
            icon={<HomeOutlined />} 
            label="New Hive #2 in the front"
            clickable
            color="secondary"
            deleteIcon={<HighlightOffOutlined/>}  
            onDelete={handleItemDelete}/>
        </Paper></Grid>
        <Grid item className={classes.main}>
          <Paper className={classes.mainPaper}>
            Section field
            <img alt="Beehive" src={MyImage}/>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
