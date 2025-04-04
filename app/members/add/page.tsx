"use client";
import { createMembers } from "@/features/members/components/communicateMembers";
import { MemberData } from "@/features/members/types/memberData";
import { Box, Center, Input, Stack, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

export default function MemberAdd() {
	const [addName, setAddName] = useState("");
	const [addImgUrl, setImgUrl] = useState("");

	const buttonClick = () => {
		const newMembers: MemberData = {
			name: addName,
			imgUrl: addImgUrl,
		};
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
						placeholder="https://〇〇〇〇.png"
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
