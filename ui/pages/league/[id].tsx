import { useRouter } from "next/router";
import React, { FC } from "react";
import Layout from "../../components/Layout";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_LEAGUES = gql`
  query getLeagues($id: ID!) {
    league(id: $id) {
      id
      name
      country
      logo
    }
  }
`;

const League: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, data } = useQuery(GET_LEAGUES, {
    variables: { id }
  });

  if (loading) return <p>Loading ...</p>;
  console.log(data);

  return (
    <Layout>
      <pre>{JSON.stringify(data.league, null, 2)}</pre>
    </Layout>
  );
};

export default League;
