import { makeStyles } from "@material-ui/core";

const navbarStyles = makeStyles((theme) => ({
  logoImg: {
    width: "200px",
    paddingLeft: "20px",
  },
  navList: {
    display: "flex",
    padding: "0px 10px 0px 10px",
  },
  navListItem: (props) => ({
    "&:hover": {
      boxShadow: "inset 0px -2px 0px 0px #4f604f",
    },
    "&.MuiListItem-root": {
      height: "64px",
    },
  }),
  navListItemText: {
    whiteSpace: "nowrap",
  },
  toolbarRoot: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default navbarStyles;
