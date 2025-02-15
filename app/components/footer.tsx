'use client';

import { Box, Image, HStack, VStack, Text } from "@chakra-ui/react";
import Link from "next/link";
// icons
import { GoHomeFill } from "react-icons/go";
import { IoIosListBox } from "react-icons/io";
import { MdAddBox, MdPeopleAlt } from "react-icons/md";
import { RiSettings4Fill } from "react-icons/ri";


export const footerHeight = "85px";

export default function Footer() {
  return (
    <Box as="footer" display={{md:"none"}} position="fixed" zIndex="1000" bottom="0" h={footerHeight} w="100vw" bg="#812c99" color="white" justifyContent="center">
      <HStack h="100%" w="100%" justifyContent="space-between" alignItems="flex-start" px="1" pt="2">
        <Link href="/home">
          <VStack w="4em" gap={0.5}>
            <GoHomeFill size="1.5em" />
            <Text fontSize="xs">ホーム</Text>
          </VStack>
        </Link>
        <Link href="/list">
          <VStack w="4em" gap={0.5}>
            <IoIosListBox size="1.5em" />
            <Text fontSize="xs">一覧</Text>
          </VStack>
        </Link>
        <Link href="/events/add">
          <VStack w="4em" gap={0.5}>
            <MdAddBox size="1.5em" />
            <Text fontSize="xs">追加</Text>
          </VStack>
        </Link>
        <Link href="/members">
          <VStack w="4em" gap={0.5}>
            <MdPeopleAlt size="1.5em" />
            <Text fontSize="xs">メンバー</Text>
          </VStack>
        </Link>
        <Link href="/settings">
          <VStack w="4em" gap={0.5}>
            <RiSettings4Fill size="1.5em" />
            <Text fontSize="xs">設定</Text>
          </VStack>
        </Link>
      </HStack>
    </Box>
  );
}