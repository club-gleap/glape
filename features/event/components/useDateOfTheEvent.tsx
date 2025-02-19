import { Box } from "@chakra-ui/react";
export const useDateOfTheEvent = (
  allDay: boolean,
  startTime: Date,
  finishTime: Date | null
) => {
  //getMonth()だけだと本来の月－１で表示されるので＋１する必要がある
  if (finishTime == null) {
    // 終了時間が指定されてない終日の場合
    if (allDay) {
      return (
        <Box>
          {startTime.getFullYear()}年{startTime.getMonth() + 1}月
          {startTime.getDate()}日 終日
        </Box>
      );
    }
    // 終了時間が指定されず、終日ではない場合
    else {
      return (
        <Box>
          {startTime.getFullYear()}年{startTime.getMonth() + 1}月
          {startTime.getDate()}日{startTime.getHours()}:{startTime.getMinutes()}{" "}
          ~
        </Box>
      );
    }
  } else if (finishTime != null) {
    // 複数日終日
    if (allDay) {
      return (
        <Box>
          <Box>
            {startTime.getFullYear()}年{startTime.getMonth() + 1}月
            {startTime.getDate()}日~
          </Box>
          <Box>
            {finishTime.getFullYear()}年{finishTime.getMonth() + 1}月
            {finishTime.getDate()}日 終日
          </Box>
        </Box>
      );
    }
    // 一日、開始時間と終了時間あり
    else if (startTime.getDate() == finishTime.getDate()) {
      return (
        <Box>
          {startTime.getFullYear()}年{startTime.getMonth() + 1}月
          {startTime.getDate()}日{startTime.getHours()}:{startTime.getMinutes()}{" "}
          ~ {finishTime.getHours()}:{finishTime.getMinutes()}
        </Box>
      );
    }
    // 複数日、開始時間と終了時間あり
    else {
      return (
        <Box>
          <Box>
            {startTime.getFullYear()}年{startTime.getMonth() + 1}月
            {startTime.getDate()}日{startTime.getHours()}:
            {startTime.getMinutes()} ~
          </Box>
          <Box>
            {finishTime.getFullYear()}年{finishTime.getMonth() + 1}月
            {finishTime.getDate()}日{finishTime.getHours()}:
            {finishTime.getMinutes()}
          </Box>
        </Box>
      );
    }
  }
};
