import { makeStyles } from "@material-ui/core";

const navbarStyles = makeStyles((theme) => ({
  logoImg: (isMobile) => ({
    width: isMobile ? "80px" : "100px",
    padding: "7px 0px 7px 20px",
  }),
  navList: {
    display: "flex",
    padding: "0px 10px 0px 10px",
  },
  navListItem: {
    "&:hover": {
      boxShadow: "inset 0px -2px 0px -1px #4f604f",
    },
    "&.MuiListItem-root": {
      height: "64px",
    },
  },
  navListItemText: {
    whiteSpace: "nowrap",
  },
  navSubList: {
    backgroundColor: "white",
    boxShadow: " -8px 21px 8px -22px inset",
    width: "150px",
  },
  toolbarRoot: (isMobile) => ({
    display: "flex",
    justifyContent: isMobile ? "normal" : "space-between",
  }),
  collapseRoot: {
    position: "absolute",
    boxShadow:
      " 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%), -8px 21px 8px -22px inset",
  },
}));

export default navbarStyles;
