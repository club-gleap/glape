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
  VStack,

} from "@chakra-ui/react";
import React, { useState } from "react";
import { attendanceIcon } from "@/features/event/components/attendanceIcon";
import { useDiffTimes } from "@/features/event/components/useDiffTimes";
import { useDateOfTheEvent } from "@/features/event/components/useDateOfTheEvent";
import { QRCodeSVG } from "qrcode.react";
import { useParams } from "next/navigation";

export default function Home() {

  //仮のデータ。

  interface EventData {
    [id: number]: {
      name: string;
      date: Date;
      members: { [name: string]: boolean };
    };
  }

  const eventData: EventData = {
    1: {
      name: "部会",
      date: new Date("2025-12-14T18:30:00"),
      members: {
        田中太郎: true,
        佐藤花子: false,
      },
    },

    2: {
      name: "部会2",
      date: new Date("2024-12-14T18:00:00"),
      members: {
        田中太郎: false,
        佐藤花子: false,
      },
    },
  };

  //ここまで仮のデータ

  // 出席ボタンを押したときの処理
  const attendButtonClick = () => {};

  //リンクからイベントIDを取得
  const { eventId } = useParams();
  const now = new Date();
  //残り時間
  const eventIdInt = Number(eventId);

  const restTime = useDiffTimes(now, eventData[eventIdInt].date);

  //終日と終了時間は実装するかわからないのでとりあえずnull
  const dateOfTheEvent = useDateOfTheEvent(
    null,
    eventData[eventIdInt].date,
    null
  );

  return (
    <Center flexDirection="column">
      <Stack spacing={8} width={{ base: "90%", md: "50%" }} mt="20px">
        <Box borderColor="black" borderWidth="1px">
          <Center fontSize="30px" ml="10px">
            {eventData[eventIdInt].name}
          </Center>
          <Center fontSize="25px" ml="10px">
            {dateOfTheEvent}
          </Center>
          <Center fontSize="20px" color="red" ml="10px">
            あと{restTime.days}日{restTime.hours}時間{restTime.minutes}分
          </Center>
        </Box>
        <VStack>
          <Box>このページのQRコード</Box>
          {/* window.location.hrefは今のページのURLを表す */}
          <QRCodeSVG value={window.location.href} />;
        </VStack>
        <Center>
          <Button
            onClick={attendButtonClick}
            colorScheme="green"
            fontSize="20px"
            borderColor="black"
            borderWidth="1px"
            width="80%"
            height="90px"
          >
            出欠登録
          </Button>
        </Center>
        <TableContainer borderColor="black" borderWidth="1px">
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th>名前</Th>
                <Th isNumeric>出欠状況</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Object.entries(eventData[eventIdInt].members).map(([name, attendance], index) => (
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
