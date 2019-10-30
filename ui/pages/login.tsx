import React, { FC } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Grid,
  Button
} from "@material-ui/core";
import { AUTH_TOKEN } from "../lib/constants";
import Nav from "../components/Nav";
import Router from "next/router";

import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

interface State {
  email: string;
  password: string;
}

const SignIn: FC = () => {
  const [login, { loading }] = useMutation(LOGIN);

  // TODO: use form component/library and validation
  const [values, setValues] = React.useState<State>({
    email: "",
    password: ""
  });

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { data } = await login({ variables: values });
      localStorage.setItem(AUTH_TOKEN, data.login.token);
      Router.push("/");
    } catch (error) {}
  };

  // TODO: create layout
  return (
    <Box>
      <Nav />
      <Box mt={10}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={8}>
            <Typography align="center" variant="h6">
              LOG IN
            </Typography>
            <Paper>
              <Box p={3}>
                <form method="post" onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Email"
                    onChange={handleChange("email")}
                    value={values.email}
                    margin="dense"
                  />
                  <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    onChange={handleChange("password")}
                    value={values.password}
                    margin="dense"
                  />
                  <Box textAlign="center" mt={2}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={loading}
                    >
                      Submit
                    </Button>
                  </Box>
                </form>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignIn;
