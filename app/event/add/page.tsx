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
    <Center>
      <Stack w={["80%", "50%"]} gap="5">
        <Box fontSize="30px" textAlign="center">
          イベントを作成する
        </Box>
        <Stack>
          <Text fontSize="15px">イベント名</Text>
          <Input
            placeholder="HTML講習会"
            value={eventname}
            onChange={(e) => setEventname(e.target.value)}
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
            />
          ) : (
            <HStack spacing="24px">
              <Input
                type="date"
                placeholder="開始日"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <Input
                type="date"
                placeholder="終了日"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
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
          >
            <option value="option1">部内に公開</option>
            <option value="option2">一般に公開</option>
            <option value="option3">非公開</option>
          </Select>
        </Stack>
        <Button size="lg" colorScheme="purple">
          作成
        </Button>
      </Stack>
    </Center>
  );
}
