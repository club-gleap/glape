"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Input,
  VStack,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

export default function LoginPage() {
  return (
    <Center
      h="100%"
      flexDirection="column"
      p={{ base: "12px", lg: "20px" }}
      bgGradient="linear(to-b, gray.100, gray.200, gray.300)"
    >
      <VStack
        w={{ base: "100%", lg: "30%" }}
        h="300px"
        bg="white"
        rounded="10px"
        p="2"
        justifyContent={"space-evenly"}
      >
        <Box fontWeight="bold" fontSize="30px">
          メンバーログイン
        </Box>
        <Flex width="80%">
          <EmailIcon boxSize="40px" mr="10px" />
          <FormControl>
            <Input type="email" />
          </FormControl>
        </Flex>
        <Flex width="80%">
          <LockIcon boxSize="40px" mr="10px" />
          <FormControl>
            <Input type="password" />
          </FormControl>
        </Flex>
        <Button colorScheme="blue" size="lg">
          ログイン
        </Button>
      </VStack>
    </Center>
  );
}
