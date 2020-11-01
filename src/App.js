import React from "react";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import history from "./middlewares/history";
import Sidebar from "./components/layout/Sidebar";
import LoginPage from "~/containers/loginPageContainer";
import DashboardPage from "~/containers/DashboardPageContainer";

const App = ({ auth }) => {
  return auth.isAuthenticated ? (
    <>
      <Sidebar />
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/">
            <DashboardPage />
          </Route>
        </Switch>
      </ConnectedRouter>
    </>
  ) : (
    <LoginPage />
  );
};

export default App;
