import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import type { NextApiRequest, NextApiResponse } from "next";

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Okta({
      idToken: true,
      clientId: process.env.OKTA_CLIENTID,
      // clientSecret: process.env.OKTA_CLIENTSECRET,
      domain: process.env.OKTA_DOMAIN,
      // domain: process.env.OKTA_DOMAIN,
      protection: ["pkce", "state"],
    }),
  ],
};
//fix
//test3

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
