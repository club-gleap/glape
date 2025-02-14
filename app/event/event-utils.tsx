import { SmallCloseIcon, CheckCircleIcon } from "@chakra-ui/icons";

//終日・終了時間なし・終了時間ありに応じて文字列を返す
export const dateOfTheEvent = (allDay: boolean, startTime: Date, finishTime: Date | null) => {
    if (finishTime == null){
        // 終了時間が指定されてない場合
        if (allDay) {
            return `${startTime.getFullYear()}  ${startTime.getMonth() + 1}/${startTime.getDate()} ~　　　 ${startTime.getFullYear()}  ${startTime.getMonth() + 1}/${startTime.getDate()} 終日`;
        }
        // 終了時間が指定されず、全日ではない場合
        else {
            return `${startTime.getHours()}:${startTime.getMinutes()}~`;
        }
    }
    else if (finishTime != null) {
        // 複数日終日
        if (allDay) {
            return `~\n
            ${finishTime.getFullYear()}  ${finishTime.getMonth() + 1}/${finishTime.getDate()} 終日`;
        }
        // 一日、開始時間と終了時間あり
        else if (startTime.getDate() == startTime.getDate()) {
            return `${startTime.getHours()}:${startTime.getMinutes()}~${finishTime.getHours()}:${finishTime.getMinutes()}`;
        }
        // 複数日、開始時間と終了時間あり
        else {
            return `${startTime.getHours()}:${startTime.getMinutes()}~　　　
            ${finishTime.getFullYear()}  ${finishTime.getMonth() + 1}/${finishTime.getDate()}  ${finishTime.getHours()}:${finishTime.getMinutes()}`;
        }
    }
}

//開始までの日、時間、分を計算して返す。過ぎている場合は全て０を返す
export const diffTimes = (startTime: Date, endTime: Date) => {
    const diffMilliseconds = endTime.getTime() - startTime.getTime(); //時間差（ms）
    if (diffMilliseconds <= 0) {
        return { days: 0, hours: 0, minutes: 0 }; 
    }
    else {
        const diffDays = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24)); //日にち
        const diffHours = Math.floor(diffMilliseconds % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));  // 時間
        const diffMinutes = Math.floor((diffMilliseconds % (1000 * 60 * 60)) / (1000 * 60));  // 分
        return { days: diffDays, hours: diffHours, minutes: diffMinutes }; 
    }
}

// 出席・欠席に応じたアイコンを返す
export const attendanceIcon = (attendance: boolean) => {
    return attendance ? <CheckCircleIcon boxSize="20px" color='green' /> : <SmallCloseIcon boxSize="20px" color='gray' />;
};