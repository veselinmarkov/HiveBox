// import { FormatLineSpacingRounded } from "@material-ui/icons"
import {Container, Box, Typography, Card, 
    CardHeader, CardContent} from '@material-ui/core';
import MyFlower from '../pictures/flowers_wide.jpg';
import MyFlower_long from '../pictures/flowers_long.jpg';
import MyBee from '../pictures/bee.jpg';
import MyLogo from '../pictures/bee_logo.svg' ;
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme) => ({
    rootContainer: {
      padding: "0px 20px", 
      margin: "70px 5px 0px",
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
      margin: "50px 5px",
      flexWrap: "nowrap",
    //   height:"1500px",
    },
  }))

export default function FrontPage() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="lg" className={classes.rootContainer}>
          {/* <div className={classes.container}> */}
            <Box sx={{margin: "25px", marginBottom: "0px", position: "relative", height:"430px"}}>
                <Box sx={{display: "flex", alignItems:"center" , position: "absolute", left: "0px", top: "30px", zIndex: "1"}}>                
                    <img alt="Logo" src={MyLogo} width="230"/>
                    <Box>
                        <Typography variant="h1" color="primary" style={{textShadow: "2px 2px 5px white"}}>
                            BeeComfort
                        </Typography>
                        <Typography variant="h4" color="secondary" noWrap style={{textShadow: "2px 2px 5px white"}}>
                            Comfort ambient for your Honey bees
                        </Typography>
                    </Box>
                </Box>
                <img alt="Flower" src={MyFlower} width="500" style={{position: "absolute", bottom: "40px", right: "45px"}}/>
                <img alt="Bee" src={MyBee} width="200" style={{position: "absolute", bottom: "0px", right: "0px"}}/>
            </Box>
            {/* <Box sx={{display: "flex", alignItems:"center"}}>                
                <img alt="Logo" src={MyLogo} width="230"/>
                <Box>
                    <Typography variant="h1" color="primary">
                        BeeComfort
                    </Typography>
                    <Typography variant="h4" color="secondary">
                        Comfort ambient for your Honey bees
                    </Typography>
                </Box>
            </Box> */}
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
        {/* </div> */}
        </Container>
    );
}