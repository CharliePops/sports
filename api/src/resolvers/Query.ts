import { getUserId, Context, footballApi } from "../utils";
import fetch from "node-fetch";

export const Query = {
  me(_parent, _args, ctx: Context) {
    const id = getUserId(ctx);
    return ctx.prisma.user({ id });
  },

  async leagues(_parent, _args, _ctx: Context) {
    const data = await footballApi("leagues/season/2019");

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
  }
};
