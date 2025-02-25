export const useDiffTimes = (
  startTime: Date | string,
  endTime: Date | string
) => {
  if (!(startTime instanceof Date)) {
    // Date オブジェクトでない場合は変換する
    startTime = new Date(startTime);
  }
  if (!(endTime instanceof Date)) {
    // Date オブジェクトでない場合は変換する
    endTime = new Date(endTime);
  }
  const diffMilliseconds = endTime.getTime() - startTime.getTime(); //時間差（ms）
  if (diffMilliseconds <= 0) {
    return { days: 0, hours: 0, minutes: 0 };
  } else {
    const diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24)); //日にち
    const diffHours = Math.floor(
      (diffMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ); // 時間
    const diffMinutes = Math.floor(
      (diffMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
    ); // 分
    return { days: diffDays, hours: diffHours, minutes: diffMinutes };
  }
};
