import React from 'react';
import {Container, AppBar, Toolbar, Box, Typography, Button, IconButton, Card, CardHeader, CardContent} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles} from '@material-ui/core/styles';
import MyFlower from './pictures/flowers_wide.jpg';
import MyBee from './pictures/bee.jpg';
import MyLogo from './pictures/bee_logo.svg' ;
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

const theme = createTheme({
    palette: {
        primary: {
            main: '#14908a', //20, 144, 138 green
        },
        secondary: {
            main: '#97295e', //151,41,94 lila
        }
    }
})

const useStyles = makeStyles((theme) => ({
    rootContainer: {
      paddingTop: "0px", 
    //   border: "2px solid #e34d7d", 
      borderRadius: "7px",
      //height: "100vh"
        //backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),url('/static/media/beehive.471e8a0b.png')",
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),url(${MyFlower})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "scroll",
    },
    container: {
      alignItems: "stretch",
      margin: "5px 0px 5px",
      flexWrap: "nowrap",
    //   height:"1500px",
    },
    delimiter: {
        flexGrow: "1",
    },
}))

export default function AppMain() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="lg" className={classes.rootContainer}>
            {//<div className={classes.container} style={{backgroundImage: `url(${MyImage})`}}>
}
            <div className={classes.container}>
                <AppBar position="fixed">
                    <Toolbar>
                    <IconButton
                        size="medium"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button color="inherit" href="/dash">
                        Dashboard
                    </Button>
                    <Button color="inherit">
                        About us
                    </Button>
                    <Button color="inherit">
                        Contact
                    </Button>
                    <div className={classes.delimiter}/>
                    <Button color="inherit" edge="final">Login</Button>
                    </Toolbar>
                </AppBar>
            {/* <Box sx={{ display: "flex", margin: "25px", alignItems: "flex-end"}}>
                <Typography variant="h1" color="primary" style={{flexGrow: 1}}>
                    BeeComfort
                </Typography>
                <img alt="Beehive" src={MyFlower} width="400"/>
            </Box> */}
            <Box sx={{margin: "25px", marginBottom: "0px", position: "relative", height:"480px"}}>
                <img alt="Flower" src={MyFlower} width="500" style={{position: "absolute", bottom: "40px", right: "45px"}}/>
                <img alt="Bee" src={MyBee} width="200" style={{position: "absolute", bottom: "0px", right: "0px"}}/>
            </Box>
            <Box sx={{display: "flex", alignItems:"center"}}>                
                <img alt="Logo" src={MyLogo} width="230"/>
                <Box>
                    <Typography variant="h1" color="primary">
                        BeeComfort
                    </Typography>
                    <Typography variant="h4" color="secondary">
                        Comfort ambient for your Honey bees
                    </Typography>
                </Box>
            </Box>
            <Card style={{marginTop: "25px"}}>
                <CardHeader
                    title={<Typography variant="h5">Helping Bees stay Warm and Safe</Typography>}
                    avatar={<CheckCircleRoundedIcon color="primary"/>}
                />
                <CardContent>
                    <Typography>
                                    Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    </Typography>
                </CardContent>
            </Card>
            <Card style={{marginTop: "25px"}}>
                <CardHeader
                    title={<Typography variant="h5">Temperature Fluctuations</Typography>}
                    avatar={<CheckCircleRoundedIcon color="primary"/>}
                />
                <CardContent>
                    <Typography>
                                    Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    </Typography>
                </CardContent>
            </Card>
            <Card style={{marginTop: "25px"}}>
                <CardHeader
                    title={<Typography variant="h5">Excess Moisture</Typography>}
                    avatar={<CheckCircleRoundedIcon color="primary"/>}
                />
                <CardContent>
                    <Typography>
                                    Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    </Typography>
                </CardContent>
            </Card>
            <Card style={{marginTop: "25px"}}>
                <CardHeader
                    title={<Typography variant="h5">Winter Survival for Honey Bees</Typography>}
                    avatar={<CheckCircleRoundedIcon color="primary"/>}
                />
                <CardContent>
                    <Typography>
                                    Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    </Typography>
                </CardContent>
            </Card>
            {/* <Box sx={{ my: 2, position: "relative" }}>
                {[...new Array(12)]
                    .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    )
                    .join('\n\n')}
            </Box> */}
            </div>
        </Container>
        </ThemeProvider>
    )
}

//export default withStyles(styles)(App);