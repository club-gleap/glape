"use client";
import {
  Box,
  Button,
  Center,
  Input,
  Stack,
  Select,
  Text,
  Radio,
  RadioGroup,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function eventAdd() {
  const [eventname, setEventname] = useState("");
  const [dateType, setDateType] = useState("single");
  const [singleDate, setSingleDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [range, setRange] = useState("");

  return (
    <VStack h="100%" flexDirection="column" p={{ base: "12px", lg: "20px" }}>
      <Text fontSize="4xl" textAlign="center" fontWeight="bold">
        イベント作成
      </Text>
      <Stack
        w={["95%", "40%"]}
        bg="gray.100"
        gap="5"
        p={{ base: "4", lg: "20" }}
        rounded="10px"
      >
        <Stack>
          <Text fontSize="15px">イベント名</Text>
          <Input
            placeholder="HTML講習会"
            value={eventname}
            onChange={(e) => setEventname(e.target.value)}
            border="1px"
          />
        </Stack>
        <Stack>
          <Text fontSize="15px">日時</Text>
          <RadioGroup onChange={setDateType} value={dateType}>
            <HStack spacing="24px">
              <Radio value="single">単体の日時</Radio>
              <Radio value="range">範囲の日時</Radio>
            </HStack>
          </RadioGroup>
          {dateType === "single" ? (
            <Input
              type="date"
              value={singleDate}
              onChange={(e) => setSingleDate(e.target.value)}
              border="1px"
            />
          ) : (
            <HStack spacing="24px">
              <Input
                type="date"
                placeholder="開始日"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                border="1px"
              />
              <Input
                type="date"
                placeholder="終了日"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                border="1px"
              />
            </HStack>
          )}
        </Stack>
        <Stack>
          <Text fontSize="15px">公開範囲</Text>
          <Select
            placeholder="公開範囲を選択してください"
            value={range}
            onChange={(e) => setRange(e.target.value)}
            border="1px"
          >
            <option value="onlyForClub">部内に公開</option>
            <option value="forPublic">一般に公開</option>
            <option value="secret">非公開</option>
          </Select>
        </Stack>
        <Button size="lg" colorScheme="purple">
          作成
        </Button>
      </Stack>
    </VStack>
  );
}
