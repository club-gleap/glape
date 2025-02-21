"use client";
import {
  Box,
  Button,
  Center,
  Input,
  Stack,
  Select,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
export default function eventAdd() {
  const [eventname, setEventname] = useState("");
  const [date, setDate] = useState("");
  const [range, setRange] = useState("option1");
  return (
    <Center>
      <Stack  w={["80%", "50%"]} gap="5">
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
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Stack>
        <Stack>
          <Text fontSize="15px">公開範囲</Text>
          <Select
            placeholder="一般公開"
            value={range}
            onChange={(e) => setRange(e.target.value)}
          >
            <option value="option2">非公開</option>
            <option value="option3">限定公開</option>
          </Select>
        </Stack>
        <Button size="lg" colorScheme="purple">
          作成
        </Button>
      </Stack>
    </Center>
  );
}
