import React from 'react';
import List_main from './list';
import Navigation from './navigation';
import Cart from './cart';
import CartContainer from './containers/cartContainer'
import ListContainer from './containers/listContainer'
import { Route, Switch } from "react-router-dom";
import './App.css';

const App = props => [
  <Navigation key={1} />,
  <Routes key={2} />
];

const Routes = props => (
  <Switch>
    <Route exact path="/" component={ListContainer} />
    <Route exact path="/cart" component={CartContainer} />
  </Switch>
);



export default App;
