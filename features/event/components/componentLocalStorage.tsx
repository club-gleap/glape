export interface EventData {
  [id: string]: {
    name: string;
    date: Date;
    members: { [name: string]: boolean };
  };
}

export const saveLocalStorage = (key: string, data: EventData) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadLocalStorage = (key: string) => {
  const dataJSON = localStorage.getItem(key);

  // dataJSON が null でない場合に JSON.parse を実行
  if (dataJSON !== null) {
    const data = JSON.parse(dataJSON);
    return data;
  } else {
    // null の場合のデフォルト値を返す
    return {}; // 初期値として空のオブジェクトを返すなど
  }
};
