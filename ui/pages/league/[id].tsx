import { useRouter } from "next/router";
import React, { FC } from "react";
import Layout from "../../components/Layout";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { withApollo } from "../../lib/apollo";

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

  return (
    <Layout>
      <pre>
        {loading ? <p>Loading ...</p> : JSON.stringify(data.league, null, 2)}
      </pre>
    </Layout>
  );
};

export default withApollo(League);
