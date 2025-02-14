'use client';

import { Box, Stack, Text, Flex, Image, VStack, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";
// icons
import { FaCheck, FaDiscord, FaEnvelope } from "react-icons/fa";

export default function Page() {
	return (
		<Box h="100%" w="100%" minHeight={{base:"", md:"800px"}}>
			<Stack 
				h="100%" 
				w="100%" 
				direction={{base: 'column', lg:'row'}} 
				gap={"0"}
			>
				<VStack h={{base:"", lg:"100%"}} w={{base:"100%", lg:"50%"}} p={{base:"12px", md:"16px", lg:"20px"}} justifyContent={"center"}>
					<Image src="/img/glape-icon.png" w={{base:"40%", lg:"75%"}} rounded={"15%"} alt=""></Image>
				</VStack>
				<Flex h={{base:"", lg:"100%"}} w={{base: "100%", lg: "50%"}} minWidth={{base:"0", lg:"550px"}} p={{base:"12px", md:"16px", lg:"20px"}}>
					<VStack h="100%" w="100%" p={{base:"12px", md:"16px", lg:"20px"}} bg="gray.100" rounded="0.5rem" gap="1.5rem" alignItems={{base:"center", lg:"flex-start"}} justifyContent={"center"}>
						<Image src="/img/glape-logo.svg" w={{base:"70%",md:"50%" ,lg:"300px"}} alt=""></Image>
						<Text fontSize={{base:"4xl", md:"5xl", lg:"6xl"}} fontWeight={"bold"} color={"gray.700"}>サークルイベントを<br />これ１つで。</Text>
						<Button as={Link} href="/login" w={{base:"15em", md:"18em", lg:"20em"}} minHeight="20px" size={"lg"} leftIcon={<FaEnvelope />} colorScheme={"blue"}>メールアドレスでログイン</Button>
						<Button w={{base:"15em", md:"18em", lg:"20em"}} minHeight="20px" size={"lg"} leftIcon={<FaCheck />} colorScheme={"green"}>新規登録</Button>
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