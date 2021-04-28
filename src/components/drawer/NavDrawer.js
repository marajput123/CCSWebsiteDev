import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  ListItemIcon,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { drawerStyles } from "./styles";
import { MenuRounded, Close, ExpandLess, ExpandMore } from "@material-ui/icons";
import { tabs } from "../../data";
import cssLogo from "../../static/svg/CCSLogo.svg";

const DrawerList = (props) => {
  const history = useHistory();
  const classes = drawerStyles();
  const [currentTab, setCurrentTab] = useState(null);

  const onHandleRoute = (url) => {
    history.replace(`/${url}`);
    props.isOpen(false);
  };

  const onHandleTab = (tab) => {
    setCurrentTab(currentTab === tab ? null : tab);
  };

  const renderSubList = (subList, parent) => {
    return (
      <Collapse in={currentTab === parent.url} timeout={400} unmountOnExit>
        <List className={classes.subListStyle}>
          {subList.map((item) => {
            return (
              <React.Fragment key={subList.title}>
                <ListItem
                  className={classes.subListPadding}
                  button
                  onClick={(e) => onHandleRoute(item.url)}
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              </React.Fragment>
            );
          })}
        </List>
      </Collapse>
    );
  };

  const renderList = () => {
    return tabs.map((item) => {
      return (
        <React.Fragment key={item.title}>
          <ListItem
            button
            onClick={(e) =>
              item.subList.length > 0
                ? onHandleTab(item.url)
                : onHandleRoute(item.url)
            }
          >
            <ListItemText primary={item.title} />
            {item.subList.length > 0 ? (
              <ListItemIcon className={classes.listIcon}>
                {currentTab === item.url ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
            ) : null}
          </ListItem>
          {item.subList.length > 0 ? renderSubList(item.subList, item) : null}
          <Divider />
        </React.Fragment>
      );
    });
  };

  return <>{renderList()}</>;
};

const NavDrawer = () => {
  const history = useHistory();
  const classes = drawerStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton onClick={(e) => setIsOpen(true)}>
        <MenuRounded />
      </IconButton>
      <Drawer
        anchor={"left"}
        open={isOpen}
        onClose={(e) => setIsOpen(false)}
        className={classes.drawerRoot}
      >
        <List>
          <div className={classes.headerContainer}>
            <IconButton onClick={(e) => setIsOpen(false)}>
              <Close />
            </IconButton>
            <img
              src={cssLogo}
              onClick={(e) => {
                history.replace("/");
                setIsOpen(false);
              }}
              className={classes.drawerImage}
            />
          </div>
          <Divider />

          {/* List goes here */}
          <DrawerList isOpen={setIsOpen} />
          {/* List ends here */}
        </List>
      </Drawer>
    </>
  );
};

export default NavDrawer;
