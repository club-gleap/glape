"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { emailLogin } from "../serverAction";

export default function LoginPage() {
  const toast = useToast();

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
        <form
          action={(data) => {
            const res = emailLogin(data);
            if (res.message === "failed to login") {
              toast({
                title: "エラー",
                description: "ログインに失敗しました",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            }
          }}
          style={{ width: "100%" }}
        >
          <VStack w="100%" gap="20px">
            <Flex width="80%">
              <EmailIcon boxSize="40px" mr="10px" />
              <FormControl>
                <Input name="email" type="email" />
              </FormControl>
            </Flex>
            <Flex width="80%">
              <LockIcon boxSize="40px" mr="10px" />
              <FormControl>
                <Input name="password" type="password" />
              </FormControl>
            </Flex>
            <Button colorScheme="blue" size="lg" type="submit">
              ログイン
            </Button>
          </VStack>
        </form>
      </VStack>
    </Center>
  );
}
