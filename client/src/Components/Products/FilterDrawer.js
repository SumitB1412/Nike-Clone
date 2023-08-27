import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

export const FilterDrawer = ({ drawerIsOpen, toggleDrawer }) => {
  return (
    <div>
      <Drawer
        anchor="bottom"
        open={drawerIsOpen}
        onClose={toggleDrawer}
        elevation={4}
      >
        <Box p={2}>
          
        </Box>
      </Drawer>
    </div>
  );
};
