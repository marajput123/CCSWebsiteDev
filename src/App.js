import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import About from "./pages/about/About";
import Navbar from "./components/navbar/Navbar";
import "./app.css";
import Contact from "./pages/contact/Contact";

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
            <Route exact path="/about">
              <div className="app-root about">
                <div className="app-container">
                  <About />
                </div>
              </div>
            </Route>
            <Route exact path="/contact">
              <div className="app-root">
                <div className="app-container">
                  <Contact />
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
