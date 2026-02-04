// config для next-auth (авторизации)
import type { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { users } from "@/data/users";

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "text", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const currentUser = users.find(
          (user: { email: string }) => user.email === credentials.email,
        );
        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPassword } = currentUser;
          return userWithoutPassword as User;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  logger: {
    error: (code, metadata) => {
      if (process.env.NODE_ENV === "development") {
        console.error(code, metadata);
      }
    },
    warn: (code) => {
      if (process.env.NODE_ENV === "development") {
        console.warn(code);
      }
    },
    debug: () => null,
  },
};
