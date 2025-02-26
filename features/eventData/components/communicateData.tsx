interface EventData {
  EventName: string;
  EventId: string;
}

interface GetData {
  events: {
    Item: {
      EventName: string;
      EventId: string;
    };
  };
}

export const createEvent = async (eventData: EventData) => {
  if (!eventData.EventName.trim()) {
    console.log("Event name is empty");
    return;
  }

  try {
    const response = await fetch(
      `https://develop.d316f8oyuwxdq0.amplifyapp.com/api/event/${eventData.EventId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
        //これを書くとリクエストが許可されるが、レスポンスが制限される
        //あまり使わない方がいいらしい
        //本番環境では書かなくてもいいらしい
        mode: "no-cors",
      }
    );

    if (response.ok) {
      const result = await response.json();
      // サーバーから返ってきた結果を基にeventDataを更新
      console.log("Event created successfully:", result);
    } else {
      console.error("Failed to create event:", response.statusText);
    }
  } catch (error) {
    console.error("Error creating event:", error);
  }
};

export const getEvent = async (eventId: string) => {
  if (!eventId.trim()) {
    console.log("Event ID is empty");
    return;
  }

  try {
    // `eventId`を使ってURLを動的に変更
    const response = await fetch(
      `https://feature-next-response-middleware.d316f8oyuwxdq0.amplifyapp.com/api/event/${eventId}`
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
