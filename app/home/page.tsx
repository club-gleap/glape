"use client";

import { Box, Stack, Center } from "@chakra-ui/react";
// import Link from "next/link";

export default function Page() {
  return (
    <Box h="100vh" w="100vw" bg="white">
      <Stack h="100%" w="100%" direction={["column", "row"]} gap={"0"}>
        <Center h="100%" w="100%">
          home
        </Center>
      </Stack>
    </Box>
  );
}
