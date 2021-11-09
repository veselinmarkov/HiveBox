import React, { useEffect } from 'react';
import {AppBar, Toolbar, Box, Typography, Button, IconButton,  
     Snackbar} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SignupMenu from './SignupMenu'
import { logout as hivedb_logout, refresh as hivedb_refresh } from '../api/hivedb';
import { PersonOutline } from '@material-ui/icons';
import MyLogo from '../pictures/bee_logo.svg' ;

function parseToken(token) {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
};

export default function Navbar() {
    const [menuAnchor, setMenuAnchor] = React.useState(null);
    const [snakMessage, setSnakMessage] = React.useState(null);
    const [user, setUser] = React.useState(null); //{... , user_id, user_name}

    useEffect( () => {
        if (! user) {
            if (! sessionStorage.getItem('refresh_token'))
                return;
            hivedb_refresh().then( result => {
                setUser( parseToken(result.data.refresh));
            }).catch( err => console.log(err));
        }
    });

    const handleLoginClick = (event) => {
        setMenuAnchor(event.currentTarget);
    }
    
    const handleLogoutClick = (event) => {
        setUser(null);
        hivedb_logout();
    }

    const handleLoginClose = () => {
        setMenuAnchor(null)
    }

    const handleLoginUser = (userInfo) => {
        if (! userInfo.error) {
            setMenuAnchor(null);
            setSnakMessage(JSON.stringify(userInfo));
            setUser(userInfo.user);
        }
    }
    
    const handleSignUpUser = (userInfo) => {
        if (! userInfo.error) {
            setMenuAnchor(null)
            setSnakMessage(JSON.stringify(userInfo));
            setUser(userInfo.user);
        }
    }

    const handleSnakClose = () => setSnakMessage(null);

    return (
        <AppBar position="fixed">
            <Toolbar>
            <IconButton 
                href="/"
                style={{padding:0}}
                size="medium"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <img alt="Logo" src={MyLogo} width="50"/>
            </IconButton>
            { user && 
                <Button color="inherit" href="/dash">
                    Dashboard
                </Button>
            }
            <Button color="inherit">
                About us
            </Button>
            <Button color="inherit">
                Contact
            </Button>
            <div style={{flexGrow: 1}}/>
            { user ? 
                <>
                    <PersonOutline style={{margin: "5px"}}/>
                    <Typography variant="h6"  style={{ minWidth:"100px"}} noWrap >{user.user_name}</Typography>
                    <Button color="inherit" edge="final" onClick={handleLogoutClick}>Logout</Button>
                </>
                :
                <Button color="inherit" edge="final" onClick={handleLoginClick}>Login</Button>
            }
            <SignupMenu open={Boolean(menuAnchor)} anchor={menuAnchor} 
                handleLogin={handleLoginUser} handleSignUp={handleSignUpUser} handleClose={handleLoginClose}/>
            <Snackbar open={Boolean(snakMessage)} autoHideDuration={6000} 
                onClose={handleSnakClose} message={snakMessage} 
                anchorOrigin={{ vertical: "top", horizontal: "center" }}>            
                </Snackbar>
            </Toolbar>
        </AppBar>
    )
}

//export default withStyles(styles)(App);