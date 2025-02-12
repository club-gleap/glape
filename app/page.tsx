'use client';

import { Box, Stack, Text, Flex, Image, VStack, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";
import discordLogin from "./serverAction";
// icons
import { FaCheck, FaDiscord, FaEnvelope } from "react-icons/fa";

export default function Page() {
	return (
		<Box h="100vh" w="100vw" minHeight="800px">
			<Stack 
				h="100%" 
				w="100%" 
				direction={{base: 'column', lg:'row'}} 
				gap={"0"}
			>
				<VStack h={{base:"", lg:"100%"}} w={{base:"100%", lg:"50%"}} p={["3", "6"]} justifyContent={"center"}>
					<Image src="img/glape-icon.png" w={{base:"40%", lg:"75%"}} rounded={"15%"} alt=""></Image>
					<Image src="img/glape-logo.svg" display={["block", "none"]} w={"60%"} alt=""></Image>
				</VStack>
				<Flex h={{base:"", lg:"100%"}} w={{base: "100%", lg: "50%"}} minWidth={["0", "550px"]} p={["3", "6"]}>
					<VStack h="100%" w="100%" p={["3", "8"]} bg="gray.100" rounded="0.5rem" gap="1.5rem" alignItems={{base:"center", lg:"flex-start"}} justifyContent={"center"}>
						<Image src="img/glape-logo.svg" display={["none", "block"]} w={"300px"} alt=""></Image>
						<Text fontSize={["4xl", "5xl","6xl"]} fontWeight={"bold"} color={"gray.700"}>サークルイベントを<br />これ１つで。</Text>
						<form
							action={discordLogin}
						>
						<Button type="submit" w={{base:"18em", lg:"20em"}} minHeight="20px" size={"lg"} leftIcon={<FaDiscord />} colorScheme={"pink"}>Discordでログイン・登録</Button>
						</form>
						<Button w={{base:"18em", lg:"20em"}} minHeight="20px" size={"lg"} leftIcon={<FaEnvelope />} colorScheme={"blue"}>メールアドレスでログイン</Button>
						<Button w={{base:"18em", lg:"20em"}} minHeight="20px" size={"lg"} leftIcon={<FaCheck />} colorScheme={"green"}>新規登録</Button>
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