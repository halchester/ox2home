import React from "react";
import { Router, Route } from "react-router-dom";
import history from './history';

// Pages
import Map from 'src/pages/map/Map';

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Map} />
    </Router>
  );
}

export default App;
