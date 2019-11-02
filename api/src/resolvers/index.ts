import { auth } from "./Mutation/auth";
import { me } from "./Query/user";
import leagues from "./Query/leagues";

export default {
  Query: {
    me,
    ...leagues
  },
  Mutation: {
    ...auth
  }
};
