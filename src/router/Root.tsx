import React from 'react';

import Home from 'pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/about-me' component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
