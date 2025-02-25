"use client";

import { Box, Button, VStack, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

interface Item {
  name: string;
  startTime: Date;
  finishTime: Date | null;
}

const items: Item[] = [
  {
    name: "部会1",
    startTime: new Date("2025-02-26T00:00:00Z"),
    finishTime: null,
  },
  {
    name: "部会2",
    startTime: new Date("2025-02-28T00:00:00Z"),
    finishTime: null,
  },
  {
    name: "飲み会",
    startTime: new Date("2025-03-01T00:00:00Z"),
    finishTime: null,
  },
  {
    name: "旅行",
    startTime: new Date("2025-03-02T00:00:00Z"),
    finishTime: new Date("2025-03-03T12:00:00Z"),
  },
];

function timeLeft(targetDate: Date): string {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  return `あと ${days}日 ${hours}時間`;
}

export default function Page() {
  return (
    <Box h="100%" w="100%" bg="white" pt="10px">
      <VStack h="100%" w="100%" gap={"4"} p="2">
        {items.map((item, index) => (
          <VStack
            key={index}
            p="4"
            w={{ base: "100%", lg: "30%" }}
            bg="gray.100"
            color="gray.800"
            rounded="10px"
            fontWeight="bold"
            gap="2"
          >
            <HStack w="100%" justifyContent="space-between">
              <VStack align="start">
                <Text fontSize="3xl">{item.name}</Text>
                <Text fontSize="xl">{item.startTime.toLocaleDateString()}</Text>
                <Text color="red.400">〆切：{timeLeft(item.startTime)}</Text>
              </VStack>
              <Button as={Link} size="md" href="/event/1" colorScheme="teal">
                詳細
              </Button>
            </HStack>
          </VStack>
        ))}
      </VStack>
    </Box>
  );
}
