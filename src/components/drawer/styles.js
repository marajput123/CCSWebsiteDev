import { makeStyles } from "@material-ui/core";

export const drawerStyles = makeStyles((theme) => ({
  drawerImage: {
    height: "35px",
    paddingLeft: "20px",
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "8px",
    paddingLeft: "1px",
  },
  drawerRoot: {
    "& .MuiDrawer-paper": {
      width: "260px",
    },
  },
  listIcon: {
    display: "flex",
    justifyContent: "flex-end",
  },
  subListPadding: {
    paddingLeft: "30px",
  },
  subListStyle: {
    boxShadow: "  -1px 20px 12px -22px inset",
  },
}));
