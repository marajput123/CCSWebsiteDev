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

//Data
const data = [
  { title: "ABOUT", url: "about", subList: [] },
  { title: "CONTACT", url: "contact", subList: [] },
  {
    title: "PROJECTS",
    url: "projects",
    subList: [
      { title: "Project 1", url: "projects", subList: [] },
      { title: "Project 2", url: "projects", subList: [] },
      { title: "Project 3", url: "projects", subList: [] },
    ],
  },
  {
    title: "SERVICES",
    url: "services",
    subList: [
      { title: "Service 1", url: "service", subList: [] },
      { title: "Service 2", url: "service", subList: [] },
    ],
  },
];

//Navbar Menu Component
const NavbarMenu = () => {
  const [currentTab, setCurrentTab] = useState(null);
  const classes = navbarStyles();

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
            onClick={(e) =>
              setCurrentTab(currentTab === item.url ? null : item.url)
            }
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
  const classes = navbarStyles();

  // //Render Navbar subList
  // const renderSubList = (subList, parent) => {
  //   return (
  //     <Collapse
  //       in={currentTab === parent.url}
  //       timeout={400}
  //       unmountOnExit
  //       className={classes.collapseRoot}
  //     >
  //       <List className={classes.navSubList} component="div" disablePadding>
  //         {subList.map((item) => {
  //           return (
  //             <React.Fragment key={item.title}>
  //               <ListItem button className={classes.nested}>
  //                 <ListItemText primary={item.title} />
  //               </ListItem>
  //             </React.Fragment>
  //           );
  //         })}
  //       </List>
  //     </Collapse>
  //   );
  // };

  // //Render Navbar List
  // const renderNavList = () => {
  //   return data.map((item) => {
  //     return (
  //       <div style={{ position: "relative" }} key={item.title}>
  //         <ListItem
  //           onClick={(e) =>
  //             setCurrentTab(currentTab === item.url ? null : item.url)
  //           }
  //           className={classes.navListItem}
  //           button
  //         >
  //           <ListItemText
  //             className={classes.navListItemText}
  //             primary={item.title}
  //           />
  //         </ListItem>
  //         {item.subList.length > 0 ? renderSubList(item.subList, item) : null}
  //       </div>
  //     );
  //   });
  // };

  return (
    <div>
      <AppBar color="default">
        <Toolbar className={classes.toolbarRoot}>
          <img className={classes.logoImg} src={ncsLogo} />
          <NavbarMenu />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Navbar;
