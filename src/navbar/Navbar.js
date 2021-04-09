import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ClickAwayListener,
} from "@material-ui/core";
import ncsLogo from "../static/svg/logo.svg";
import "./navbar.css";
import navbarStyles from "./styles";

//Hamburger Component
const Hamburger = () => {};

//Navbar Component
const Navbar = (props) => {
  const [currentTab, setCurrentTab] = useState(null);
  const classes = navbarStyles();
  return (
    <div>
      <AppBar color="default">
        <Toolbar className={classes.toolbarRoot}>
          <img className={classes.logoImg} src={ncsLogo} />
          <div>
            <ClickAwayListener onClickAway={(e) => setCurrentTab(null)}>
              <List className={classes.navList} component="nav">
                <div style={{ position: "relative" }}>
                  <ListItem
                    onClick={(e) =>
                      setCurrentTab(currentTab === "mail" ? null : "mail")
                    }
                    className={classes.navListItem}
                    button
                  >
                    <ListItemText
                      className={classes.navListItemText}
                      primary="Sent mail"
                    />
                  </ListItem>
                  <Collapse
                    in={currentTab === "mail"}
                    timeout={400}
                    unmountOnExit
                    style={{
                      position: "absolute",
                      boxShadow:
                        " 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%), -8px 21px 8px -22px inset",
                    }}
                  >
                    <List
                      style={{
                        backgroundColor: "white",
                        boxShadow: " -8px 21px 8px -22px inset",
                      }}
                      component="div"
                      disablePadding
                    >
                      <ListItem button className={classes.nested}>
                        <ListItemText primary="Starred" />
                      </ListItem>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary="Starred" />
                      </ListItem>
                      <ListItem button className={classes.nested}>
                        <ListItemText primary="Starred" />
                      </ListItem>
                    </List>
                  </Collapse>
                </div>
                <ListItem className={classes.navListItem} button>
                  <ListItemText primary="Drafts" />
                </ListItem>
              </List>
            </ClickAwayListener>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Navbar;
