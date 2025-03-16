import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Discord from "next-auth/providers/discord";
import { saltAndHashPassword } from "./app/lib/password";
import { getUserFromDb } from "./app/lib/db";
import { signInSchema } from "./app/lib/zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Discord,
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        let user = null;

        const { email, password } = await signInSchema.parseAsync(credentials);

        // logic to salt and hash password
        const pwHash = await saltAndHashPassword(password);

        // logic to verify if the user exists
        user = await getUserFromDb(email, pwHash);
        if (!user) {
          return false;
        }

        // return user object with their profile data
        return user;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  callbacks: {
    async redirect() {
      return "/home";
    },
  },
});
