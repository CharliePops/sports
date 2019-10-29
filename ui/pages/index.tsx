import React, { FC } from "react";
import Head from "next/head";
import Nav from "../components/Nav";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_FEED = gql`
  query getFeed {
    feed {
      id
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(GET_FEED);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Errro {JSON.stringify(error)}</p>;

  console.log(data);

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div></div>
    </div>
  );
};

export default Home;
