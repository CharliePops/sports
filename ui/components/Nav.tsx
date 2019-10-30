import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import Link from "next/link";
import { AUTH_TOKEN } from "../lib/constants";
import Router from "next/router";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    button: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      cursor: "pointer"
    }
  })
);

export default function ButtonAppBar() {
  const classes = useStyles({});
  const [isLoggedIn, setIsLogged] = React.useState<boolean>(false);

  const handleLogout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    Router.push("/");
  };

  React.useEffect(() => {
    // TODO: move to app state
    setIsLogged(!!localStorage.getItem(AUTH_TOKEN));
  });

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <Typography variant="h6" className={classes.title}>
              Football
            </Typography>
          </Link>
          {isLoggedIn ? (
            <Button variant="contained" onClick={handleLogout}>
              Log Out
            </Button>
          ) : (
            <Link href="/login">
              <Button variant="contained">Log In</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
