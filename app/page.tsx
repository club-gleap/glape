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
				<Flex h={["", "100%"]} w={["100%", "50%"]} p={["3", "6"]}>
					<VStack h="100%" w="100%" p={["3", "8"]} bg="gray.100" rounded="0.5rem" gap="1rem" alignItems={["center", "flex-start"]} justifyContent={"center"}>
						<Image src="img/glape-logo.svg" display={["none", "block"]} w={"300px"}></Image>
						<Text fontSize={["4xl", "6xl"]} fontWeight={"bold"} color={"gray.700"}>サークルイベントを<br />これ１つで。</Text>
						<Button 
							w={["18rem", "20rem"]} 
							size={"lg"} 
							leftIcon={<FontAwesomeIcon icon={faDiscord} />} 
							colorScheme={"pink"}
							onClick={() => signIn('discord')}
						>
							Discordでログイン・登録
						</Button>
						<Button w={["18rem", "20rem"]} size={"lg"} leftIcon={<FontAwesomeIcon icon={faEnvelope} />} colorScheme={"blue"}>メールアドレスでログイン</Button>
						<Button w={["18rem", "20rem"]} size={"lg"} leftIcon={<FontAwesomeIcon icon={faCheck} />} colorScheme={"green"}>新規登録</Button>
						<HStack>
							<Text>Powered By</Text>
							<Link href="https://circle.gleap.tech/" target="_blank" rel="noopener noreferrer"><u>GLEAP</u></Link>
						</HStack>
					</VStack>
				</Flex>
			</Stack>
		</Box>
	)
}