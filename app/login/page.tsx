"use client"
import { Box,Button,Center, Flex, FormControl, Input } from "@chakra-ui/react";
import { EmailIcon,LockIcon } from "@chakra-ui/icons";
export default function LoginPage(){
	return (
		<Center h="100vh" flexDirection="column">
			<Box fontSize="30px">メンバーログイン</Box>
			<Box>Hello World</Box>
			<Flex width={["80%","50%"]} mt="20px">
				<EmailIcon boxSize="40px" mr="10px"></EmailIcon>
				<FormControl>
					<Input type="email"></Input>
				</FormControl>
			</Flex>
			<Flex width={["80%","50%"]} mt="20px">
				<LockIcon boxSize="40px" mr="10px"></LockIcon>
				<FormControl>
					<Input type="password"></Input>
				</FormControl>
			</Flex>
			<Button mt="50px">アカウント登録はこちら</Button>
		</Center>

	)
}
