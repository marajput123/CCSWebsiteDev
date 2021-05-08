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
import Drawer from "../drawer/NavDrawer";
import ncsLogo from "../../static/svg/logo.svg";
import navbarStyles from "./styles";
import { navbar as data } from "../../data";

//Navbar Menu Component
const NavbarMenu = () => {
  const history = useHistory();
  const [currentTab, setCurrentTab] = useState(null);
  const classes = navbarStyles();

  const onTabClick = (item) => {
    if (item.subList.length == 0) {
      history.replace(item.url);
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
    return data.map((item) => {
      return (
        <div style={{ position: "relative" }} key={item.title}>
          <ListItem
            onClick={(e) => onTabClick(item)}
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
  const isMobile = useMediaQuery("(max-width:800px)");
  const classes = navbarStyles(isMobile);
  return (
    <div>
      <AppBar color="default">
        <Toolbar className={classes.toolbarRoot}>
          {isMobile ? <Drawer /> : null}
          <img className={classes.logoImg} src={ncsLogo} />
          {isMobile ? null : <NavbarMenu />}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Navbar;
