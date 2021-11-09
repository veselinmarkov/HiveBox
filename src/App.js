import React from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import FrontPage from './components/FrontPage';
import Dashboard from './Dashboard';

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

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Router>
        <Route exact path="/">
          <FrontPage/>
        </Route>
        <Route path="/dash">
          <Dashboard />
        </Route>
      </Router>
    </ThemeProvider>
  );
}