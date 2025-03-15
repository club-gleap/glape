"use client";
import {
	deleteAllMembers,
	deleteOneMember,
	getMembers,
} from "@/features/members/components/communicateMembers";
import { DeleteIcon } from "@chakra-ui/icons";
import {
	Box,
	Center,
	Stack,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	HStack,
	Image,
	Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function MemberList() {
	interface MemberData {
		name: string;
		imgUrl: string;
	}

	const [getmember, setMembers] = useState<MemberData[]>([]);
	const fetchMembers = async () => {
		const data = await getMembers();
		setMembers(data);
	};

	useEffect(() => {
		fetchMembers();
	}, []);

	return (
		<Center flexDirection="column">
			<Stack width={{ base: "90%", md: "30%" }} mt="20px">
				<TableContainer
					rounded="10px"
					borderColor="gray.600"
					borderWidth="3px"
				>
					<Table
						variant="striped"
						colorScheme="gray"
						sx={{ borderCollapse: "collapse" }}
					>
						<Thead>
							<Tr>
								<Th fontSize="20px" textAlign="center">
									メンバー
								</Th>
							</Tr>
						</Thead>
						<Tbody>
							{getmember.length === 0 ? (
								<Tr>
									<Td>メンバーなし</Td>
								</Tr>
							) : (
								getmember.map((member, index) => (
									<Tr key={index}>
										<Td>
											<HStack spacing={8}>
												<Image
													src={member.imgUrl} // 画像URLをsrc属性に設定
													height="40px"
													style={{
														borderRadius: "50%",
													}} // 画像を円形にするスタイル
													alt=""
												/>
												<Box fontWeight="bold">
													{member.name}
												</Box>
											</HStack>
										</Td>
									</Tr>
								))
							)}
						</Tbody>
					</Table>
				</TableContainer>
				<Center>
					<HStack>
						<Button
							size="lg"
							colorScheme="purple"
							onClick={deleteAllMembers}
						>
							全員削除　
							<DeleteIcon />
						</Button>
						<Button
							size="lg"
							colorScheme="purple"
							onClick={deleteOneMember}
						>
							１人削除　
							<DeleteIcon />
						</Button>
					</HStack>
				</Center>
			</Stack>
		</Center>
	);
}
