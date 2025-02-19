"use client";

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContentAreaProps {
  children: ReactNode;
  headerHeight: string;
  footerHeight: string;
}

export default function ContentArea({
  children,
  headerHeight,
  footerHeight,
}: ContentAreaProps) {
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