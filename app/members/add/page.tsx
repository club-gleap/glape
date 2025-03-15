"use client";
import { createMembers } from "@/features/members/components/communicateMembers";
import { Box, Center, Input, Stack, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function MemberAdd() {
	const [addName, setAddName] = useState("");
	const [addImgUrl, setImgUrl] = useState("");

	interface MemberData {
		name: string;
		imgUrl: string;
	}

	const buttonClick = () => {
		const newMembers: MemberData[] = [
			{
				name: addName,
				imgUrl: addImgUrl,
			},
		];

		createMembers(newMembers);
		setAddName("");
		setImgUrl("");
	};

	return (
		<Center>
			<Stack w={["80%", "50%"]} gap="5">
				<Box fontSize="30px" textAlign="center">
					メンバーを追加する
				</Box>
				<Stack>
					<Text fontSize="15px">氏名</Text>
					<Input
						placeholder="田中太郎"
						value={addName}
						onChange={(e) => setAddName(e.target.value)}
					/>
				</Stack>
				<Stack>
					<Text fontSize="15px">画像URL</Text>
					<Input
						placeholder="https://develop.d316f8oyuwxdq0.amplifyapp.com/img/glape-icon.png"
						value={addImgUrl}
						onChange={(e) => setImgUrl(e.target.value)}
					/>
				</Stack>
				<Button size="lg" colorScheme="purple" onClick={buttonClick}>
					追加
				</Button>
			</Stack>
		</Center>
	);
}
