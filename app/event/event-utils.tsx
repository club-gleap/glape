import { SmallCloseIcon, CheckCircleIcon } from "@chakra-ui/icons";

//終日・終了時間なし・終了時間ありに応じて文字列を返す
export const period = (_allDay: boolean, _startTime: Date, _finishTime: Date | null) => {
    if (_finishTime == null){
        // 終了時間が指定されてない場合
        if (_allDay) {
            return `${_startTime.getFullYear()}  ${_startTime.getMonth() + 1}/${_startTime.getDate()} ~　　　 ${_startTime.getFullYear()}  ${_startTime.getMonth() + 1}/${_startTime.getDate()} 終日`;
        }
        // 終了時間が指定されず、全日ではない場合
        else {
            return `${_startTime.getHours()}:${_startTime.getMinutes()}~`;
        }
    }
    else if (_finishTime != null) {
        // 複数日終日
        if (_allDay) {
            return `~\n
            ${_finishTime.getFullYear()}  ${_finishTime.getMonth() + 1}/${_finishTime.getDate()} 終日`;
        }
        // 一日、開始時間と終了時間あり
        else if (_startTime.getDate() == _finishTime.getDate()) {
            return `${_startTime.getHours()}:${_startTime.getMinutes()}~${_finishTime.getHours()}:${_finishTime.getMinutes()}`;
        }
        // 複数日、開始時間と終了時間あり
        else {
            return `${_startTime.getHours()}:${_startTime.getMinutes()}~　　　
            ${_finishTime.getFullYear()}  ${_finishTime.getMonth() + 1}/${_finishTime.getDate()}  ${_finishTime.getHours()}:${_finishTime.getMinutes()}`;
        }
    }
}

//開始までの日、時間、分を計算して返す。過ぎている場合は全て０を返す
export const diffTimes = (limitTime: Date) => {
    const now = new Date();
    const diffMilliseconds = limitTime.getTime() - now.getTime(); //時間差（ms）
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
    if (attendance) return <CheckCircleIcon boxSize="20px" color='green'></CheckCircleIcon>;
    else return <SmallCloseIcon boxSize="20px" color='gray'></SmallCloseIcon>;
};