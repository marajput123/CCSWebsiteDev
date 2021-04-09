import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Navbar from "./navbar/Navbar";
import Home from "./pages/home/Home";
import "./app.css";

const App = () => {
  return (
    <div>
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar />
          <div className="app-root">
            <div className="app-container">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    </div>
  );
};

export default App;
