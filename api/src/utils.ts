import * as jwt from "jsonwebtoken";
import { Prisma } from "./generated/prisma-client";

export interface Context {
  prisma: Prisma;
  request: any;
}

export function getUserId(ctx: Context) {
  const Authorization = ctx.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
      userId: string;
    };
    return userId;
  }

  throw new AuthError();
}

export class AuthError extends Error {
  constructor() {
    super("Not authorized");
  }
}

const API_ENDPOINT = "https://server1.api-football.com/";
const API_KEY = "d237121c112799cfa3c8ccb206d2ab1b";

export const footballApi = async (path: string) => {
  const res = await fetch(API_ENDPOINT + path, {
    headers: {
      Accept: "application/json",
      "X-RapidAPI-Key": API_KEY
    }
  });
  const data = await res.json();
  return data;
};
