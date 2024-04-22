import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Paths from '../constants/paths.constant';

import Home from '../pages/Home';
import Details from '../pages/Details';

const Routes: React.FC = () => (
  <Switch>
    <Route path={Paths.Home} exact component={Home} />
    <Route path={Paths.Details} exact component={Details} />
  </Switch>
);

export default Routes;
