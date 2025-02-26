import { v4 as uuidv4 } from "uuid";

interface MemberData {
  member: string[]; // memberプロパティは文字列の配列
}

interface GetMemberData {}

export const createMembers = async (memberData: MemberData) => {
  try {
    const uniqueId = uuidv4();
    const sendData = {
      ...memberData,
      id: uniqueId, // 新たにUUIDを追加
    };
    const response = await fetch(
      `https://develop.d316f8oyuwxdq0.amplifyapp.com/api/member`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
      }
    );
    if (response.ok) {
      const responseData = await response.json();
      console.log("データが保存されました:", responseData);
    }
  } catch (error) {
    console.error("Error creating event:", error);
  }
};

export const getMembers = async () => {
  try {
    // `eventId`を使ってURLを動的に変更
    const response = await fetch(
      `https://develop.d316f8oyuwxdq0.amplifyapp.com/api/member`
    ); // イベントを取得するAPIにリクエスト
    if (response.ok) {
      const data: GetData = await response.json(); // APIから返されたデータをパース
      return data;
    } else {
      console.error("Failed to fetch event:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching event:", error);
  }
};
