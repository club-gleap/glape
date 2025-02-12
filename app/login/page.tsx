"use client"
import { Box,Button,Center, Flex, FormControl, Input } from "@chakra-ui/react";
import { EmailIcon,LockIcon } from "@chakra-ui/icons";
export default function LoginPage(){
	return (
		<Center h="100vh" flexDirection="column">
			<Box fontSize="30px">メンバーログイン</Box>
			<Flex width={["80%","50%"]} mt="20px">
				<EmailIcon boxSize="40px" mr="10px"/>
				<FormControl>
					<Input type="email"/>
				</FormControl>
			</Flex>
			<Flex width={["80%","50%"]} mt="20px">
				<LockIcon boxSize="40px" mr="10px"/>
				<FormControl>
					<Input type="password"/>
				</FormControl>
			</Flex>
			<Button mt="50px">ログイン</Button>
		</Center>

	)
}
