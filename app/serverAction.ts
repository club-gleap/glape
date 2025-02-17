'use server';

import { signIn } from "@/auth";

export default async function discordLogin() {
  await signIn("discord")
}