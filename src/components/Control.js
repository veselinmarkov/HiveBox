import React from 'react';
import {Container, Grid, Paper, CssBaseline, Chip, Avatar, Card, CardHeader, 
  IconButton, Typography, CardActionArea} from '@material-ui/core';
import { HomeOutlined, HighlightOffOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    },
    cardMarker: {
      color: "#fff",
      backgroundColor: "#e34d7d"
    }
  }));

export default function Control({id, unitList, handleIdChange}) {
    // unitList: [
    //    {id: 1, text: "Bio Unit #1"},
    //    {id: 2, text: "Bio Unit #2"},
    //    {id: 3, text: "Bio Unit #3"},
    //]
    const classes = useStyles();
    
    const handleClick = (e) => {
        if (handleIdChange)
            handleIdChange(e.key);
    }

    return (
        <div className={classes.sidebar}>
            Control component
            {unitList.map(element => {
                return (<Card className={classes.card, (element.id === id) ? classes.cardMarker : ""} 
                    onClick={handleClick} key={element.id}>
                    <CardActionArea>
                    <CardHeader 
                      avatar={<HomeOutlined />} 
                      title={element.text}
                      action={
                        <IconButton aria-label="settings" className={classes.inCardButton}>
                          <HighlightOffOutlined/>
                        </IconButton>
                      }/>
                    </CardActionArea>
                  </Card>)
            })}
            {/*
            <Card className={classes.card, classes.cardMarker} onClick={handleClick}>
            <CardActionArea>
            <CardHeader 
              avatar={<HomeOutlined />} 
              title="Bio Unit #1"
              action={
                <IconButton aria-label="settings" className={classes.inCardButton}>
                  <HighlightOffOutlined/>
                </IconButton>
              }/>
            </CardActionArea>
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
            */}
        </div>
    )
}