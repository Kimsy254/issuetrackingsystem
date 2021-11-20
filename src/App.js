import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewIssues from "./containers/ViewIssues";
import SelectIssue from "./containers/SelectIssue";
import NewIssue from "./containers/NewIssue";

import NoMatch from "./containers/NoMatch";

const App = ({ store }) => {
  console.log("App Store", store);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/issues/" component={ViewIssues} />

          <Route
            path="/issues/create-issue"
            component={NewIssue}
          />
          <Route path="/issues/:id?" component={SelectIssue} />
		  
          <Route component={NoMatch} />
		 
        </Switch>
      </Router>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
