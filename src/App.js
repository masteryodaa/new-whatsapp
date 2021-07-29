import React from 'react'
import HomePage from './HomeSystem/HomePage';
import Login from './LoginSystem/Main'
import { BrowserRouter, Switch, Route } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>


  );
}

export default App;
