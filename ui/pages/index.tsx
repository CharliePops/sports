import React, { FC } from "react";
import Layout from "../components/Layout";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField, Box, Grid } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Router from "next/router";
import { withApollo } from "../lib/apollo";

const StyledGrid = styled(Grid)({
  height: "100%"
});

const GET_LEAGUES = gql`
  query getLeagues {
    leagues {
      id
      name
      country
      logo
    }
  }
`;

const Home: FC = () => {
  const { loading, data } = useQuery(GET_LEAGUES);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, value) => {
    event.preventDefault();
    Router.push(`/league/[id]`, "/league/" + value.id);
  };

  return (
    <Layout>
      <StyledGrid container justify="center">
        <Box width={[1, 1 / 2, 1 / 4]} mt={[5, 10]} px={[5, 0]}>
          <Autocomplete
            loading={loading}
            onChange={handleChange}
            options={data && data.leagues ? data.leagues : []}
            getOptionLabel={option => `${option.country} - ${option.name}`}
            renderInput={params => (
              <TextField
                {...params}
                label="Select Tournament"
                variant="outlined"
                fullWidth
              />
            )}
          />
        </Box>
      </StyledGrid>
    </Layout>
  );
};

export default withApollo(Home);
