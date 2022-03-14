import React, { useState } from "react";
import NavBar from "./component/NavBar";
import News from "./component/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);
  let pageSize = 15;
  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar color="#f11946" progress={progress} />
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          </Route>

          <Route exact path="/science">
            <News
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
