import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./app.css";
import Services from "./pages/services/Services";

const App = () => {
  return (
    <div>
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Switch>
            <Route exact path="/services">
              <div className="app-root services">
                <div className="app-container">
                  <Services />
                </div>
              </div>
            </Route>
            <Route exact path="/">
              <div className="app-root home">
                <div className="app-container">
                  <Home />
                </div>
              </div>
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
};

export default App;
