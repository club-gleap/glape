"use client"
import { Box, Button, Center, Stack, Table,Thead,Tbody,Tr,Th,Td,TableContainer} from "@chakra-ui/react";
import React, { useState } from 'react';
import { dateOfTheEvent, diffTimes, attendanceIcon } from './event-utils';

export default function Home() {
  //仮のデータ。本番ではどこかからデータを読み込む？
  const [members, setMembers] = useState({
    "田中": false,
    "佐藤": true,
    "斎藤": true,
    "中田": false,
  });
  const eventName: string = "部会"
  const startTime = new Date('2025-12-14T18:30:00');
  const finishTime = new Date('2025-12-15T18:40:00');
  const eventContent: string = "イベントの内容あああああああああああああああああああああああああああああああああああああああああああああ"
  const isAllDay = true;
  //ここまで仮のデータ


  // 出席ボタンを押したときの処理
  const attendButtonClick = () => {

  };


  const now = new Date()
  //残り時間
  const restTimes = diffTimes(now, startTime);

  return (
    <Center flexDirection="column">
      <Stack spacing={8} width={{ base: "90%", md: "50%" }} mt="20px">
        <Box borderColor="black" borderWidth="1px">
          <Center fontSize="50px" ml="10px">{eventName}</Center>
          <Center fontSize="30px" ml="10px">
            {/* getMonth()だけだと本来の月－１で表示されるので＋１する必要がある */}
            {startTime.getFullYear()}  {startTime.getMonth() + 1}/{startTime.getDate()}  {dateOfTheEvent(isAllDay, startTime, finishTime)}
          </Center>
          <Center fontSize="20px" color="red" ml="10px">
            あと{restTimes.days}日{restTimes.hours}時間{restTimes.minutes}分
          </Center>
          <Center>
            <Box fontSize="20px" width="90%" ml="10px">{eventContent}</Box>
          </Center>
        </Box>

        <Center>
        <Button onClick={attendButtonClick} fontSize="40px" borderColor="black" borderWidth="1px" width="80%" height="90px">
            出欠登録
          </Button>
        </Center>

        <TableContainer borderColor="black" borderWidth="1px">
          <Table variant='striped' colorScheme='gray'>
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
                  <Td isNumeric>
                    {attendanceIcon(attendance)}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </Center>
  );
}