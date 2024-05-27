import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import connectToDB from "./utils";
import User from "@/models/User";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        connectToDB();
        console.log(profile);
        try {
          const existingUser = await User.findOne({ email: profile.email });
          if (!existingUser) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              avatar: profile.avatar_url,
            });
            await newUser.save();
          }
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      }
    },
  },
});
