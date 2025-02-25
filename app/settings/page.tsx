import { Box, Flex, Text, VStack, Center, Image, Button } from "@chakra-ui/react";

export default function Page() {
  return (
    <Flex
      w={"100%"}
      h={"100%"}
      p={{ base: "12px", lg: "20px" }}
      justifyContent="center"
    >
      <VStack w={{ base: "100%", lg: "40%" }} gap="20px">
        <Text fontSize={"4xl"} fontWeight={"bold"} color="gray.700">
          設定
        </Text>
        <VStack
          w="100%"
          p={{ base: "12px", lg: "20px" }}
          rounded="10px"
          bg="gray.100"
          fontSize="lg"
          fontWeight={"bold"}
        >
          <Text>プロフィール</Text>
          <Center h="150px" w="100%">
            <Image
              src="img/glape-icon.png"
              rounded="100%"
              h="80%"
              alt=""
            ></Image>
          </Center>
          <Box textAlign="left">
            <Text>名前: 田中</Text>
            <Text>学年: B1</Text>
            <Text>学部: 工学部 電気情報工学科</Text>
          </Box>
        </VStack>
        <Button w="10em" minHeight="20px" size={"lg"} colorScheme={"purple"}>
          ログアウト
        </Button>
      </VStack>
    </Flex>
  );
}
