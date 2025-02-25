"use client";

import { Box, Image, Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHomeFill, GoHome } from "react-icons/go";
import {
  MdAddBox,
  MdOutlineAddBox,
  MdPeopleAlt,
  MdOutlinePeopleAlt,
} from "react-icons/md";
import { RiSettings4Fill, RiSettings4Line } from "react-icons/ri";

export const headerHeight = "50px";

const items = [
  {
    href: "/home",
    filledIcon: GoHomeFill,
    outlineIcon: GoHome,
    label: "ホーム",
  },
  {
    href: "/home/addEvent",
    filledIcon: MdAddBox,
    outlineIcon: MdOutlineAddBox,
    label: "追加",
  },
  {
    href: "/members",
    filledIcon: MdPeopleAlt,
    outlineIcon: MdOutlinePeopleAlt,
    label: "メンバー",
  },
  {
    href: "/settings",
    filledIcon: RiSettings4Fill,
    outlineIcon: RiSettings4Line,
    label: "設定",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      h={headerHeight}
      zIndex="1000"
      display={{ base: "none", lg: "block" }}
      bg="#812c99"
      color="white"
      borderTop="1px"
      borderColor="#812c99"
      px={{ base: "10px", md: "20px" }}
      justifyContent="center"
    >
      <Flex h="100%" alignItems="center" px="2" pt="env(safe-area-inset-top)">
        <Flex h="100%" flex="1" alignItems="center">
          <Image
            src="/img/glape-logo-white.svg"
            display={{ base: "none", md: "block" }}
            h="70%"
            alt=""
          />
        </Flex>
        <HStack
          h="100%"
          w="100%"
          gap={{ md: "2", lg: "5" }}
          alignItems="center"
          justifyContent="flex-end"
          flex="1"
        >
          {items.map((link) => {
            const Icon =
              pathname === link.href ? link.filledIcon : link.outlineIcon;
            const labelText =
              pathname === link.href ? <b>{link.label}</b> : link.label;
            return (
              <Link key={link.href} href={link.href}>
                <HStack w="6em" gap={0.5} justifyContent="center">
                  <Icon size="2em" />
                  <Text fontSize="sm">{labelText}</Text>
                </HStack>
              </Link>
            );
          })}
        </HStack>
      </Flex>
    </Box>
  );
}
