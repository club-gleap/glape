"use client";
import { attendanceIcon } from "@/features/event/components/attendanceIcon";
import { useDateOfTheEvent } from "@/features/event/components/useDateOfTheEvent";
import { useDiffTimes } from "@/features/event/components/useDiffTimes";
import {
  Box,
  Button,
  Center,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { QRCodeSVG } from "qrcode.react";
import { useState, useEffect } from "react";

// イベントのデータ型を定義
interface EventData {
  EventName: string;
  EventId: string;
}

export default function Home() {
  const [eventData, setEventData] = useState<EventData | null>(null); // イベントデータの状態を管理
  const [eventName, setEventName] = useState<string>("部会15"); // イベント名の状態
  const newEventData: EventData = {
    EventName: eventName,
    EventId: "005", // 固定のEventIdを使用
  };

  // イベントデータを作成して状態を更新する関数
  const createEvent = async () => {
    if (!eventName.trim()) {
      console.log("Event name is empty");
      return;
    }

    try {
      const response = await fetch(
        `https://develop.d316f8oyuwxdq0.amplifyapp.com/api/event/${newEventData.EventId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEventData),
          //これを書くとリクエストが許可されるが、レスポンスが制限される
          //あまり使わない方がいいらしい
          //本番環境では書かなくてもいいらしい
          mode: "no-cors",
        }
      );

      if (response.ok) {
        const result = await response.json();
        // サーバーから返ってきた結果を基にeventDataを更新
        setEventData(result); // サーバーから返されたデータを状態にセット
        console.log("Event created successfully:", result);
      } else {
        console.error("Failed to create event:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const getEvent = async (eventId: string) => {
    if (!eventId.trim()) {
      console.log("Event ID is empty");
      return;
    }
    console.log("ここは出来てる");

    try {
      console.log("トライはしている");
      // `eventId`を使ってURLを動的に変更
      const response = await fetch(
        `https://feature-next-response-middleware.d316f8oyuwxdq0.amplifyapp.com/`
      ); // イベントを取得するAPIにリクエスト
      console.log("トライはしている2");
      console.log(response.ok);
      if (response.ok) {
        console.log("成功はしている");
        const data = await response.json(); // APIから返されたデータをパース
        setEventData(data); // 取得したデータをstateにセット
      } else {
        console.log("失敗");
        console.error("Failed to fetch event:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching event:", error);
    }
  };

  // 最初にイベントデータを作成する
  useEffect(() => {
    createEvent(); // コンポーネントがマウントされたときにイベントを作成
  }, []);

  useEffect(() => {
    getEvent("005");
  }, []);

  // 出席ボタンを押したときの処理
  const attendButtonClick = () => {};

  //リンクからイベントIDを取得
  //<Record<string, string>>を付けることで型を文字列に指定して、エラーが起きないようにしている
  const { eventId } = useParams<Record<string, string>>();

  const now = new Date();
  //残り時間

  //const restTime = useDiffTimes(now, eventData[eventId].date);

  //終日と終了時間は実装するかわからないのでとりあえずnull
  //const dateOfTheEvent = useDateOfTheEvent(null, eventData[eventId].date, null);

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
          {/* eventData が null でない場合のみ表示 */}
          {eventData ? (
            <>
              <Center fontSize="3xl" ml="10px">
                {eventData.EventName}
              </Center>
              <Center fontSize={{ base: "lg", lg: "2xl" }} ml="10px">
                {/* {dateOfTheEvent} */}
              </Center>
              <Center fontSize={{ base: "md", lg: "xl" }} color="red" ml="10px">
                {/* あと{restTime.days}日{restTime.hours}時間{restTime.minutes}分 */}
              </Center>
            </>
          ) : (
            <Center>イベントデータを読み込んでいます...</Center>
          )}
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
              {/*{Object.entries(eventData[eventId].members).map(
								([name, attendance], index) => (
									<Tr key={index}>
										<Td fontSize="20px">{name}</Td>
										<Td isNumeric>{attendanceIcon(attendance)}</Td>
									</Tr>
								)
							)}*/}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </Center>
  );
}
