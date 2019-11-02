import React, { FC } from "react";
import Nav from "./Nav";
import { Grid } from "@material-ui/core";

const Layout: FC = ({ children }) => {
  return (
    <Grid container direction="column" style={{ height: "100vh" }}>
      <Grid item>
        <Nav></Nav>
      </Grid>
      <Grid item style={{ flexGrow: 1 }}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;
