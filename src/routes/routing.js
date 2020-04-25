import { Route, Switch } from 'react-router-dom';
import React from 'react';
import FoodList from '../containers/FoodList';
import FoodDetail from '../components/FoodDetail';
const routes = (
  <Switch>
    <Route exact={true} path="/dishes" component={FoodList} />
    <Route path="/dishes/:id" component={FoodDetail} />
  </Switch>
);

export default routes;
