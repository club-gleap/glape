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
import { loadLocalStorage } from "@/features/event/components/componentLocalStorage";

export default function Home() {
  //ローカルストレージからファイルを読み込む
  const eventData = loadLocalStorage("event");

  // 出席ボタンを押したときの処理
  const attendButtonClick = () => {};

  //リンクからイベントIDを取得
  //<Record<string, string>>を付けることで型を文字列に指定して、エラーが起きないようにしている
  const { eventId } = useParams<Record<string, string>>();

  const now = new Date();
  //残り時間
  const restTime = useDiffTimes(now, eventData[eventId].date);

  //終日と終了時間は実装するかわからないのでとりあえずnull
  const dateOfTheEvent = useDateOfTheEvent(null, eventData[eventId].date, null);

  return (
    <Center flexDirection="column">
      <Stack spacing={8} width={{ base: "90%", md: "50%" }} mt="20px">
        <Box borderColor="black" borderWidth="1px">
          <Center fontSize="30px" ml="10px">
            {eventData[eventId].name}
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
              {Object.entries(eventData[eventId].members).map(
                ([name, attendance], index) => (
                  <Tr key={index}>
                    <Td fontSize="20px">{name}</Td>
                    <Td isNumeric>{attendanceIcon(attendance as boolean)}</Td>
                  </Tr>
                )
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </Center>
  );
}
