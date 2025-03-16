'use server';

import { signIn } from "@/auth";

export async function discordLogin() {
  // try {
  //   await signIn("discord");
  // } catch (error) {
  //   console.log(error);
  //   return {"message": "failed to login"}
  // }
  await signIn("discord")
}

export async function emailLogin(formData: FormData) {
  try {
    await signIn("credentials", formData)
  } catch (error) {
    console.log(error)
    return {"message": "failed to login"}
  }
}