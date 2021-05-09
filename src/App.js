import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";
import About from "./pages/about/About";
import "./app.css";

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
