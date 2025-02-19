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
import { useRouter, useParams } from "next/navigation";
import { attendanceIcon } from "@/features/event/components/attendanceIcon";
import { useDiffTimes } from "@/features/event/components/useDiffTimes";
import { useDateOfTheEvent } from "@/features/event/components/useDateOfTheEvent";
import { SyncStringStorage } from "jotai/ts3.8/vanilla/utils/atomWithStorage";

const idToName: { [key: number]: any; }  = {//idから名前を取得するための仮データ。実際にはバックエンドでの処理。
  3: "田中",
  5: "佐藤",
  7: "斎藤",
  1228: "中田",
};

export default function Home() {
  const eventId = useParams().eventId;
  const router = useRouter();
  //仮のデータ。本番ではどこかからデータを読み込む？
  const [members] = useState({
    3: false,
    5: true,
    7: true,
    1228: false,
  });

  const eventName = "部会";
  const startTime = new Date("2025-12-14T18:30:00");
  const finishTime = new Date("2025-12-14T18:40:00");
  const eventContent: string =
    "イベントの内容あああああああああああああああああああああああああああああああああああああああああああああ";
  const isAllDay = false;
  //ここまで仮のデータ
  // 出席ボタンを押したときの処理
  const attendButtonClick = () => {
    // 出欠登録ページに遷移
    router.push(`/attendance/${eventId}`);
  };

  const now = new Date();
  //残り時間
  const restTime = useDiffTimes(now, startTime);

  const dateOfTheEvent = useDateOfTheEvent(isAllDay, startTime, finishTime);

  return (
    <Center flexDirection="column">
      <Stack spacing={8} width={{ base: "90%", md: "50%" }} mt="20px">
        <Box borderColor="black" borderWidth="1px">
          <Center fontSize="30px" ml="10px">
            {eventName}
          </Center>
          <Center fontSize="25px" ml="10px">
            {dateOfTheEvent}
          </Center>
          <Center fontSize="20px" color="red" ml="10px">
            あと{restTime.days}日{restTime.hours}時間{restTime.minutes}分
          </Center>
          <Center>
            <Box fontSize="20px" width="90%" ml="10px">
              {eventContent}
            </Box>
          </Center>
        </Box>

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
              {Object.entries(members).map(([id, attendance], index) => (
                <Tr key={index}>
                  <Td fontSize="20px">{idToName[Number(id)]}</Td>
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
