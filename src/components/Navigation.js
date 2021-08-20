import React from "react";

// Internal
import MenuItem from "./MenuItem";
import { useStyles } from "../styles";
import routes from "../routes";

// assests
import Logo from "./../logo.svg";

// @material-ui
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";

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
        <List className={classes.navigationList}>
          {routes.map((route, index) => {
            return (
              <MenuItem
                label={route.label}
                icon={route.icon}
                activeIcon={route.activeIcon}
                path={route.path}
              />
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default Navigation;
