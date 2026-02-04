// установка next-auth npm i next-auth
import { authConfig } from "@/configs/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
