import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0} position="static">
          <Toolbar variant="dense">
            <Typography
              style={{ fontWeight: "bolder", fontSize: "50px" }}
              component={"div"}
            >
              Dictionary
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
