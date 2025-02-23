import { Box, Text, VStack } from "@chakra-ui/react";

export default function Page() {
  return (
    <Box w={"100%"} h={"100%"}>
      <VStack w={{ base: "100%", lg: "50%" }}>
        <Text fontSize={"3em"}>設定</Text>
      </VStack>
    </Box>
  );
}
