import { Button, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

const NavMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpen = (evt: any) => {
    setAnchorEl(evt.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="md:!hidden">
      <Button onClick={handleOpen} className="!capitalize !text-white">
        Browse
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem>Home</MenuItem>
        <MenuItem>Movies</MenuItem>
        <MenuItem>TV Shows</MenuItem>
        <MenuItem>New</MenuItem>
        <MenuItem>Popular</MenuItem>
      </Menu>
    </div>
  );
};

export default NavMenu;
