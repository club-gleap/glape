"use client";

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { headerHeight } from "../components/header";
import { footerHeight } from "../components/footer";

interface ContentAreaProps {
  children: ReactNode;
}

export default function ContentArea({ children }: ContentAreaProps) {
  return (
    <Box
      h={{ base: "", md: "100%" }}
      w="100%"
      pt={{ base: "0", md: headerHeight }}
      pb={{ base: footerHeight, md: "0" }}
    >
      {children}
    </Box>
  );
}
