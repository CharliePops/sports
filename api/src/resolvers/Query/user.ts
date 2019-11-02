import { getUserId, Context } from "../../utils";

export const me = (_parent, _args, ctx: Context) => {
  const id = getUserId(ctx);
  return ctx.prisma.user({ id });
};
