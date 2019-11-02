import { Context, footballApi } from "../../utils";
import { argsToArgsConfig } from "graphql/type/definition";

export const leagues = async (_parent, _args, _ctx: Context) => {
  const data = await footballApi("leagues");

  return data.api.leagues
    .filter(l => l.is_current && l.standings)
    .map(
      ({
        league_id,
        name,
        type,
        country,
        country_code,
        season,
        season_start,
        season_end,
        logo,
        flag,
        standings,
        is_current,
        coverage
      }) => ({
        id: league_id,
        name,
        type,
        country,
        countryCode: country_code ? country_code : "",
        season,
        seasonStart: season_start,
        seasonEnd: season_end,
        logo: logo ? logo : "",
        flag: flag ? flag : "",
        standings: Boolean(standings),
        isCurrent: Boolean(is_current),
        coverage: JSON.stringify(coverage)
      })
    );
};

export const league = async (_parent, args, _ctx: Context) => {
  const data = await footballApi("leagues/league/" + args.id);

  // TODO: create mappings
  const {
    league_id,
    name,
    type,
    country,
    country_code,
    season,
    season_start,
    season_end,
    logo,
    flag,
    standings,
    is_current,
    coverage
  } = data.api.leagues[0];

  return {
    id: league_id,
    name,
    type,
    country,
    countryCode: country_code ? country_code : "",
    season,
    seasonStart: season_start,
    seasonEnd: season_end,
    logo: logo ? logo : "",
    flag: flag ? flag : "",
    standings: Boolean(standings),
    isCurrent: Boolean(is_current),
    coverage: JSON.stringify(coverage)
  };
};

export default {
  leagues,
  league
};
