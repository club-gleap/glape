interface MemberData {
	name: string;
	imgUrl: string;
}
export const createMembers = async (memberData: MemberData[]) => {
	try {
		const oldMembers = await getMembers();
		//元のデータに新しいデータを追加する
		const sendData = {
			data: [...oldMembers, ...memberData],
		};
		const response = await fetch(
			`https://develop.d316f8oyuwxdq0.amplifyapp.com/api/member/member`,
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
		console.error("データ保存エラー", error);
	}
};

export const getMembers = async () => {
	try {
		const response = await fetch(
			`https://develop.d316f8oyuwxdq0.amplifyapp.com/api/member/member`
		); // イベントを取得するAPIにリクエスト
		if (response.ok) {
			const getData = await response.json(); // APIから返されたデータをパース
			console.log(getData);
			if (getData.member != null && getData.member != undefined) {
				return getData.member.Item.data;
			} else {
				return [];
			}
		} else {
			console.error("Failed to fetch event:", response.statusText);
		}
	} catch (error) {
		console.error("Error fetching event:", error);
	}
};

export const deleteAllMembers = async () => {
	if (window.confirm("本当に削除しますか？")) {
		try {
			const sendData = {
				data: "",
			};
			const response = await fetch(
				`https://develop.d316f8oyuwxdq0.amplifyapp.com/api/member/member`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(sendData),
				}
			);
			window.location.reload();
			if (response.ok) {
				const responseData = await response.json();
				console.log("データが削除されました:", responseData);
			}
		} catch (error) {
			console.error("データ削除エラー:", error);
		}
	}
};

export const deleteOneMember = async () => {
	if (window.confirm("本当に削除しますか？")) {
		try {
			const oldMembers = await getMembers();
			oldMembers.pop();
			//元のデータに新しいデータを追加する
			const sendData = {
				data: [...oldMembers],
			};

			const response = await fetch(
				`https://develop.d316f8oyuwxdq0.amplifyapp.com/api/member/member`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(sendData),
				}
			);
			window.location.reload();
			if (response.ok) {
				const responseData = await response.json();
				console.log("データが削除されました:", responseData);
			}
		} catch (error) {
			console.error("データ削除エラー:", error);
		}
	}
};
