import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import type { NextApiRequest, NextApiResponse } from "next";

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Okta({
      idToken: true,
      clientId: process.env.OKTA_CLIENTID,
      // domain: process.env.OKTA_DOMAIN + "/oauth2",
      domain: process.env.OKTA_DOMAIN,
      //test
      protection: ["pkce", "state"],
    }),
    // ...add more providers here
  ],
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
