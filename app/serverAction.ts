'use server';

import { signIn } from "@/auth";

export async function discordLogin() {
  await signIn("discord")
}

export async function emailLogin(formData: FormData) {
  await signIn("credentials", formData);
}