"use client"
import { Box, Button, Center ,Checkbox,Flex,UnorderedList,ListItem} from "@chakra-ui/react";
import { babelIncludeRegexes } from "next/dist/build/webpack-config";
import React, { useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'


export default function Home() {

    {/* 仮のデータ。本番ではどこかからデータを読み込む？ */}
    const [members, setMembers] = useState({
        "田中": false,
        "佐藤": true,
        "斎藤": true,
    });
    const eventContent: string = "イベントの内容あああああああああああああああああああああああああああああああああああああああああああああ"

    
	return (
        <Center flexDirection="column">
            <Box borderColor="black" borderWidth="1px" width='90%' mt="20px">
                <Box fontSize="30px" textDecoration="underline">イベント詳細</Box>
                <Center>
                    <Box fontSize="20px" width='90%'>{eventContent}</Box>
                </Center>
            </Box>
            <Button fontSize="50px" borderColor="black" borderWidth="1px" width='90%' height="90px" mt="20px">出欠を登録</Button>
            <Box width='90%' mt="20px">
                <Box fontSize="30px" textDecoration="underline">メンバー</Box>
                <UnorderedList>
                    {/* membersリストの中身を順番に表示 */}
                    {Object.entries(members).map(([name, attendance], index) => (
                        <Center key={index}>        
                            <Flex width="85%" mt="10px" justify="space-between">
                                <ListItem fontSize="20px">{name}</ListItem>
                                {/* 画面上で変更できないチェックボックス */}
                                <Checkbox colorScheme='green' isChecked={attendance}></Checkbox>
                            </Flex>
                        </Center>
                        ))
                    }
                </UnorderedList>
            </Box>
            <TableContainer width='90%' mt="20px">
                    <Table variant='striped' colorScheme='gray'>
                        <Thead>
                            <Tr>
                                <Th>名前</Th>
                                <Th isNumeric>出欠状況</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {/* membersリストの中身を順番に表示 */}
                            {Object.entries(members).map(([name, attendance], index) => (
                                    <Tr width="85%" mt="10px" >
                                        <Td fontSize="20px">{name}</Td>
                                        {/* 画面上で変更できないチェックボックス */}
                                        <Td isNumeric>
                                            <Checkbox colorScheme='green' isChecked={attendance}></Checkbox>
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
            </TableContainer>
        </Center>
    );
}