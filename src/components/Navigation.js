import React from "react";

// Internal
import MenuItem from "./MenuItem";

// assests folder
import Logo from "../logo.svg";
import DashboardIcon from "./";

// @material-ui
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { useStyles } from "../styles";
//import { MenuItem } from "@material-ui/core";

const Navigation = () => {
  const classes = useStyles();
  return (
    <div>
      <Drawer
        className={{ paper: classes.navigationDrawer }}
        variant="permanent"
        open={true}
      >
        <div className={classes.navigationLogoContainer}>
          <img
            className={classes.navigationLogo}
            src={Logo}
            alt="quality logo"
          />
        </div>
        <List>
          <MenuItem
            lable="Dashboard"
            icon={DashboardIcon}
            activeIcon={DashboardIconActive}
            path="/"
          />
        </List>
      </Drawer>
    </div>
  );
};

export default Navigation;
