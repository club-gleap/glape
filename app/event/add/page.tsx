"use client"
import { Box,Button,Center,Input, Stack, Text} from "@chakra-ui/react";
export default function eventAdd(){
	return (
        <Center flexDirection={"column"} h="100vh" w="100vw">
            <Stack direction="column" w={["80%","50%"]} gap="10">
                <Box fontSize="30px" textAlign="center">イベントを作成する</Box>
                <Input placeholder='イベント名' />
                <Input type="date" />
                <Input placeholder='公開範囲' />
                <Button size="lg" colorScheme="teal">作成</Button>
            </Stack>
        </Center>
    )
}