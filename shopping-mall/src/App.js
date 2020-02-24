import React from 'react';
import List_main from './list';
import Navigation from './navigation';
import Cart from './cart';
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
    <Route exact path="/cart" component={Cart} />
  </Switch>
);



export default App;
