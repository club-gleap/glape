'use client';

import { Box, Image, HStack, VStack, Text } from "@chakra-ui/react";
import Link from "next/link";
// icons
import { GoHomeFill } from "react-icons/go";
import { FaList } from "react-icons/fa6";
import { MdAddBox, MdPeopleAlt } from "react-icons/md";


export const footerHeight = "90px";

export default function Footer() {
  return (
    <Box as="footer" display={{md:"none"}} position="fixed" bottom="0" h={footerHeight} w="100vw" bg="#812c99" color="white" justifyContent="center">
      <HStack h="100%" w="100%" justifyContent="space-between" alignItems="flex-start" px="2" pt="2">
        <Link href="/home">
          <VStack w="4em" gap={0.5}>
            <GoHomeFill size="2em" />
            <Text fontSize="xs">ホーム</Text>
          </VStack>
        </Link>
        <Link href="/list">
          <VStack w="4em" gap={0.5}>
            <FaList size="2em" />
            <Text fontSize="xs">一覧</Text>
          </VStack>
        </Link>
        <Link href="/create">
          <VStack w="4em" gap={0.5}>
            <MdAddBox size="2em" />
            <Text fontSize="xs">追加</Text>
          </VStack>
        </Link>
        <Link href="/members">
          <VStack w="4em" gap={0.5}>
            <MdPeopleAlt size="2em" />
            <Text fontSize="xs">メンバー</Text>
          </VStack>
        </Link>
      </HStack>
    </Box>
  );
}