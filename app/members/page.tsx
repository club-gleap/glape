"use client";
import {
	deleteAllMembers,
	deleteOneMember,
	getMembers,
} from "@/features/members/components/communicateMembers";
import { MemberAndIdData } from "@/features/members/types/memberAndIdData";
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
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	ChakraProvider,
	VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function MemberList() {
	const [value, setValue] = useState<number>(0);
	const [members, setMembers] = useState<MemberAndIdData[]>([]);
	const router = useRouter();
	const fetchMembers = async () => {
		const data = await getMembers();
		setMembers(data);
	};

	const delAllMembers = async () => {
		if (window.confirm("本当に全員削除しますか？")) {
			//メンバーが削除されるのを待ってからrefresh
			await deleteAllMembers();
			fetchMembers();
			router.refresh();
		}
	};

	const delOneMember = async (memberindex: number) => {
		if (memberindex != -1) {
			//メンバーが削除されるのを待ってからrefresh
			await deleteOneMember(members[memberindex].MemberId);
			fetchMembers();
			router.refresh();
			setValue(0);
		} else {
			window.confirm("数字を入力してください");
		}
	};

	const handleChange = (valueString: any) => {
		setValue(valueString);
	};

	useEffect(() => {
		fetchMembers();
	}, []);

	return (
		<Center flexDirection="column">
			<Stack width={{ base: "90%", md: "30%" }} mt="20px">
				<TableContainer rounded="10px" borderColor="gray.600" borderWidth="3px">
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
							{members.length === 0 ? (
								<Tr>
									<Td>メンバーなし</Td>
								</Tr>
							) : (
								members.map((member, index) => (
									<Tr key={index}>
										<Td>
											<HStack spacing={8}>
												<Box>{index + 1}</Box>
												<Image
													src={member.data.imgUrl} // 画像URLをsrc属性に設定
													height="40px"
													style={{
														borderRadius: "50%",
													}} // 画像を円形にするスタイル
													alt=""
												/>
												<Box fontWeight="bold">{member.data.name}</Box>
											</HStack>
										</Td>
									</Tr>
								))
							)}
						</Tbody>
					</Table>
				</TableContainer>
				<Center>
					<VStack>
						<HStack>
							<ChakraProvider>
								<NumberInput
									value={value}
									onChange={handleChange}
									min={1}
									max={members.length}
									step={1} // ステップを1に設定
									precision={0} // 小数点以下の桁数を0に設定
								>
									<NumberInputField />
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
							</ChakraProvider>

							<Button
								size="lg"
								colorScheme="purple"
								onClick={() => delOneMember(value - 1)}
							>
								番号で削除　
								<DeleteIcon />
							</Button>
						</HStack>
						<Button
							size="lg"
							colorScheme="purple"
							onClick={() => delAllMembers()}
						>
							全員削除　
							<DeleteIcon />
						</Button>
					</VStack>
				</Center>
			</Stack>
		</Center>
	);
}
