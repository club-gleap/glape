'use client';

import { Box, Stack, Center, Text, Flex, Image, VStack, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
// auth
import { signIn, useSession } from "next-auth/react";


export default function Page() {
	return (
		<Box h="100vh" w="100vw" bg="white">
			<Stack h="100%" w="100%" direction={['column', 'row']} gap={"0"}>
				<VStack h={["", "100%"]} w={["100%", "50%"]} p={["3", "6"]} justifyContent={"center"}>
					<Image src="img/glape-icon.png" w={["40%", "75%"]} rounded={"15%"}></Image>
					<Image src="img/glape-logo.svg" display={["block", "none"]} w={"60%"}></Image>
				</VStack>
				<Center h={["", "100%"]} w={["100%", "50%"]} p={["3", "6"]}>
          <Text>ログインに成功しました。</Text>
				</Center>
			</Stack>
		</Box>
	)
}