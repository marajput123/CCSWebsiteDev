import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ClickAwayListener,
  useMediaQuery,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { tabs } from "../../data";
import Drawer from "../drawer/NavDrawer";
import ccsLogo from "../../static/svg/CCSLogo.svg";
import navbarStyles from "./styles";

//Navbar Menu Component
const NavbarMenu = () => {
  const history = useHistory();
  const [currentTab, setCurrentTab] = useState(null);
  const classes = navbarStyles();

  const onCurrentTab = (tab) => {
    if (tab.subList.length > 0) {
      setCurrentTab(currentTab === tab.url ? null : tab.url);
    } else {
      history.replace(`/${tab.url}`);
    }
  };

  //Render Navbar subList
  const renderSubList = (subList, parent) => {
    return (
      <Collapse
        in={currentTab === parent.url}
        timeout={400}
        unmountOnExit
        className={classes.collapseRoot}
      >
        <List className={classes.navSubList} component="div" disablePadding>
          {subList.map((item) => {
            return (
              <React.Fragment key={item.title}>
                <ListItem button className={classes.nested}>
                  <ListItemText primary={item.title} />
                </ListItem>
              </React.Fragment>
            );
          })}
        </List>
      </Collapse>
    );
  };

  //Render Navbar List
  const renderNavList = () => {
    return tabs.map((item) => {
      return (
        <div style={{ position: "relative" }} key={item.title}>
          <ListItem
            onClick={(e) => onCurrentTab(item)}
            className={classes.navListItem}
            button
          >
            <ListItemText
              className={classes.navListItemText}
              primary={item.title}
            />
          </ListItem>
          {item.subList.length > 0 ? renderSubList(item.subList, item) : null}
        </div>
      );
    });
  };

  return (
    <div>
      <ClickAwayListener onClickAway={(e) => setCurrentTab(null)}>
        <List className={classes.navList} component="nav">
          {renderNavList()}
        </List>
      </ClickAwayListener>
    </div>
  );
};

//Navbar Component
const Navbar = (props) => {
  const history = useHistory();
  const isMobile = useMediaQuery("(max-width:800px)");
  const classes = navbarStyles(isMobile);

  const onClickHome = (e) => {
    history.replace("/");
  };

  return (
    <div>
      <AppBar color="default">
        <Toolbar className={classes.toolbarRoot}>
          {isMobile ? <Drawer /> : null}
          <img
            className={classes.logoImg}
            src={ccsLogo}
            onClick={onClickHome}
          />
          {isMobile ? null : <NavbarMenu />}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Navbar;
