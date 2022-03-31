import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import View from "./Student/View";
import Edit from "./Student/Edit";

// import Home from "./Page/Home";
import Home from './Page/Home'
const App = () => {
  return (
    <div>
      <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/view/:id" component={View} />
          <Route exact path="/edit/:id" component={Edit} />
        </Switch>
      </Router>
      </>
    </div>
  );
};

export default App;
