import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import configureStore from "./redux/configureStore";
import history from "./middlewares/history";
import reportWebVitals from "./reportWebVitals";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => <div>Match</div>} />
        <Route render={() => <div>Miss</div>} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
