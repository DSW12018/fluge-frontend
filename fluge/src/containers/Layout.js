import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Home';
import Nav from '../components/Nav';
import Flights from '../components/Flights';

const Layout = () => (
  <div>
    <Nav />
    <Route exact path="/" component={Home} />
    <Route exact path="/voos/:origin/:destination/:departure/:arrival" component={Flights} />
  </div>
);

export default Layout;
