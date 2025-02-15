'use client';

import { Box, Image, Button, Flex, HStack, VStack, Text, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
// icons
import { GoHomeFill } from "react-icons/go";
import { IoIosListBox } from "react-icons/io";
import { MdAddBox, MdPeopleAlt } from "react-icons/md";
import { RiSettings4Fill } from "react-icons/ri";


export const headerHeight = "50px";

export default function Header() {
  return (
    <>
      <Box as="header" position="fixed" top="0" left="0" right="0" h={headerHeight} zIndex="1000" display={{base:"none", md:"block"}}  bg="#812c99" color="white" borderTop="1px" borderColor="#812c99" px={{base:"10px", md:"20px"}} justifyContent="center">
        <Flex h="100%" alignItems="center" px="2" pt="env(safe-area-inset-top)">
          <Flex h="100%" flex="1" alignItems="center">
            <Image src="/img/glape-logo-white.svg" display={{base:"none", md:"block"}} h="70%" alt="" />
          </Flex>
          <HStack h="100%" w="100%" gap={{md:"2", lg:"5"}} alignItems="center" justifyContent="flex-end" flex="1">
            <Link href="/home">
              <HStack w="6em" gap={0.5} justifyContent="center">
                <GoHomeFill size="2em" />
                <Text fontSize="sm">ホーム</Text>
              </HStack>
            </Link>
            <Link href="/list">
              <HStack w="6em" gap={0.5} justifyContent="center">
                <IoIosListBox size="2em" />
                <Text fontSize="sm">一覧</Text>
              </HStack>
            </Link>
            <Link href="/create">
              <HStack w="6em" gap={0.5} justifyContent="center">
                <MdAddBox size="2em" />
                <Text fontSize="sm">追加</Text>
              </HStack>
            </Link>
            <Link href="/members">
              <HStack w="6em" gap={0.5} justifyContent="center">
                <MdPeopleAlt size="2em" />
                <Text fontSize="sm">メンバー</Text>
              </HStack>
            </Link>
            <Link href="/settings">
              <HStack w="6em" gap={0.5} justifyContent="center">
                <RiSettings4Fill size="2em" />
                <Text fontSize="sm">設定</Text>
              </HStack>
            </Link>
          </HStack>
        </Flex>
        </Box>
    </>
  );
}