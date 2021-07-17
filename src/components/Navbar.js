import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

const Navbar = () => {
  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Live Score</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

/*
isme appbar toolbar  typography sb material ui se lia hai...typography is used for  entering text
toolbar se neeli line aai upar ...aur live score humne typography se likha hai

iconbutton se hum icon use kr paate hai...fir menuicon se hum top left me menu icon use krrhe hai
// inherit se white color milega



*/
