"use client";

import { ChakraProvider } from "@chakra-ui/react";

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
