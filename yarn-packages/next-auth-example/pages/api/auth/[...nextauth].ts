import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import { clientPromise } from "../../../lib/mongodb";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    })
  ],
  theme: {
    colorScheme: "auto",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      console.log(token);
      return token
    },
  },
})
