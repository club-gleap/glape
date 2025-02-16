"use client"
import { Box,Button,Center,Input} from "@chakra-ui/react";
export default function eventAdd(){
	return (
        <Center flexDirection={"column"} h="100vh">
            <Box fontSize="30px">イベントを作成する</Box>
            <Input width={["80%","50%"]} mt="20px" placeholder='イベント名' />
            <Input width={["80%","50%"]} mt="20px" placeholder='日時' />
            <Input width={["80%","50%"]} mt="20px" placeholder='公開範囲' />
            <Button mt="50px">作成　　</Button>
        </Center>
    )
}