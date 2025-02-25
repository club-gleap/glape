"use client";
import {
  Box,
  Button,
  Center,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { attendanceIcon } from "@/features/event/components/attendanceIcon";
import { useDiffTimes } from "@/features/event/components/useDiffTimes";
import { useDateOfTheEvent } from "@/features/event/components/useDateOfTheEvent";

export default function Home() {
  //仮のデータ。本番ではどこかからデータを読み込む？
  const [members] = useState({
    田中: false,
    佐藤: true,
    斎藤: true,
    中田: false,
  });

  const eventName = "部会";
  const startTime = new Date("2025-12-14T18:30:00");
  const finishTime = new Date("2025-12-14T18:40:00");
  const eventContent: string = "イベント詳細";
  const isAllDay = false;
  //ここまで仮のデータ

  // 出席ボタンを押したときの処理
  const attendButtonClick = () => {};

  const now = new Date();
  //残り時間
  const restTime = useDiffTimes(now, startTime);

  const dateOfTheEvent = useDateOfTheEvent(isAllDay, startTime, finishTime);

  return (
    <Center flexDirection="column">
      <Stack spacing={8} width={{ base: "90%", lg: "50%" }} pt="20px">
        <Box
          borderColor="gray.600"
          borderWidth="3px"
          rounded="10px"
          fontWeight="bold"
          color="gray.800"
          p={{ base: "2", lg: "4" }}
        >
          <Center fontSize="3xl" ml="10px">
            {eventName}
          </Center>
          <Center fontSize={{ base: "lg", lg: "2xl" }} ml="10px">
            {dateOfTheEvent}
          </Center>
          <Center fontSize={{ base: "md", lg: "xl" }} color="red" ml="10px">
            あと{restTime.days}日{restTime.hours}時間{restTime.minutes}分
          </Center>
          <Center>
            <Box
              fontSize={{ base: "sm", lg: "lg" }}
              width="90%"
              ml="10px"
              fontWeight="medium"
            >
              {eventContent}
            </Box>
          </Center>
        </Box>

        <Center>
          <Button
            onClick={attendButtonClick}
            colorScheme="green"
            size="lg"
            borderWidth="1px"
          >
            出欠登録
          </Button>
        </Center>

        <TableContainer borderColor="gray.600" borderWidth="3px" rounded="10px">
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th>名前</Th>
                <Th isNumeric>出欠状況</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Object.entries(members).map(([name, attendance], index) => (
                <Tr key={index}>
                  <Td fontSize="20px">{name}</Td>
                  <Td isNumeric>{attendanceIcon(attendance)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </Center>
  );
}
