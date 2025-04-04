import { MemberData } from "../types/memberData";

export const createMembers = async (memberData: MemberData) => {
	try {
		const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
		const uuid = crypto.randomUUID();
		//元のデータに新しいデータを追加する
		const sendData = {
			data: memberData,
		};
		const response = await fetch(`${BASE_URL}/api/member/${uuid}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(sendData),
		});
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
		const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
		const response = await fetch(`${BASE_URL}/api/member`); // イベントを取得するAPIにリクエスト
		if (response.ok) {
			const getData = await response.json(); // APIから返されたデータをパース
			console.log("返されたデータ");
			console.log(getData);
			if (getData.members != null && getData.members != undefined) {
				return getData.members;
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
	try {
		const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
		const members = await getMembers();
		for (const member of members) {
			const response = await fetch(
				`${BASE_URL}/api/member/${member.MemberId}`,
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			if (response.ok) {
				const responseData = await response.json();
				console.log("データが削除されました:", responseData);
			}
		}
	} catch (error) {
		console.error("データ削除エラー:", error);
	}
};

export const deleteOneMember = async (memberId: string) => {
	try {
		const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
		const response = await fetch(`${BASE_URL}/api/member/${memberId}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (response.ok) {
			const responseData = await response.json();
			console.log("データが削除されました:", responseData);
		}
	} catch (error) {
		console.error("データ削除エラー:", error);
	}
};
