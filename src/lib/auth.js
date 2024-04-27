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
        try {
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = new User({
              username: user.name,
              email: user.email,
              avatar: user.image,
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
