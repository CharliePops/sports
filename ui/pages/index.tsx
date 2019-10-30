import React, { FC } from "react";
import Head from "next/head";
import Nav from "../components/Nav";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_LEAGUES = gql`
  query getLeagues {
    leagues {
      id
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_LEAGUES);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Errro {JSON.stringify(error)}</p>;

  // TODO: create league selection

  return (
    <div>
      <Nav />

      <div></div>
    </div>
  );
};

export default Home;
