import React from 'react';
import {Container, Grid, Paper, CssBaseline, Chip, Avatar, Card, CardHeader, 
  IconButton, CardContent, Typography} from '@material-ui/core';
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
    width: "40%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    height: "100%",
    '& > *': {
      margin: theme.spacing(0.5),
    }
  },
  inCardButton: {
    padding: "unset"
  },
  card: {
    maxWidth: "156px",
    maxHeight: "64px",
    backgroundColor: "#3f51b5",
    color: "#fff",
  }
}));

export default function App() {
  const [user, setUser] = React.useState({ id:"Guest" });
  const [id, setId] = React.useState(null);
  const classes = useStyles();
  const handleUser = () => {};
  
  const handleItemDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    setId("1");
  }

  return (
    <Container component="main" maxWidth="lg" className={classes.rootContainer}>
      <CssBaseline />
      <Navbar user={user} updateUser={handleUser}/>
      <Grid container className={classes.container} spacing={1}>
        <Grid item container className={classes.sidebar}>
          <Card className={classes.card} onClick={handleClick}>
            <CardHeader 
              avatar={<HomeOutlined />} 
              title="Bio Unit #1"
              action={
                <IconButton aria-label="settings" className={classes.inCardButton}>
                  <HighlightOffOutlined/>
                </IconButton>
              }/>
          </Card>
          <Card className={classes.card}>
            <CardHeader 
              avatar={<HomeOutlined />} 
              title="Bio Unit #2"
              action={
                <IconButton aria-label="settings" className={classes.inCardButton}>
                  <HighlightOffOutlined/>
                </IconButton>
              }/>
          </Card>
          <Card className={classes.card}>
            <CardHeader 
              avatar={<HomeOutlined />} 
              title="Bio Unit #3"
              action={
                <IconButton aria-label="settings" className={classes.inCardButton}>
                  <HighlightOffOutlined/>
                </IconButton>
              }/>
          </Card>
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
