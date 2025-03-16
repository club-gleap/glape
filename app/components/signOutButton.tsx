"use client";
import { signOut } from "next-auth/react";
import { Button } from "@chakra-ui/react";
import { redirect } from "next/navigation";

const SignOut = () => {
  return (
    <Button
      onClick={() => {
        signOut({ redirect: false });
        redirect("/");
      }}
      w="10em"
      size="lg"
      colorScheme="purple"
    >
      ログアウト
    </Button>
  );
};

export default SignOut;
