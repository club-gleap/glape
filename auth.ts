import NextAuth from "next-auth";
import Discord from "@/app/discord";
// import Discord from "next-auth/providers/discord";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Discord],
})