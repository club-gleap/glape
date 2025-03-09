import { v4 as uuidv4 } from "uuid";

interface MemberData {
  [key: string]: string;
}

export const createMembers = async (memberData: MemberData) => {
  try {
    console.log("ログ３");
    const uniqueId = "001";
    const sendData = {
      // UUID
      id: uniqueId,
      data: memberData,
    };
    const response = await fetch(
      `https://develop.d316f8oyuwxdq0.amplifyapp.com/api/member/${uniqueId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendData),
      }
    );
    if (response.ok) {
      console.log("ログ４");
      const responseData = await response.json();
      console.log("データが保存されました:", responseData);
    }
  } catch (error) {
    console.log("ログ５");
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
