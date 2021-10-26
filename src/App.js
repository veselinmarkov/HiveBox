import React from 'react'
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
import AppMain from './AppMain';
import Dashboard from './Dashboard';

export default function App() {
    return (
      <Router>
        <Route exact path="/">
        <AppMain />
        </Route>
        <Route path="/dash">
        <Dashboard />
        </Route>
      </Router>
    );
  }