"use client";

import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHomeFill, GoHome } from "react-icons/go";
import { IoIosListBox, IoIosList } from "react-icons/io";
import {
  MdAddBox,
  MdOutlineAddBox,
  MdPeopleAlt,
  MdOutlinePeopleAlt,
} from "react-icons/md";
import { RiSettings4Fill, RiSettings4Line } from "react-icons/ri";

export const footerHeight = "85px";

const items = [
  {
    href: "/home",
    filledIcon: GoHomeFill,
    outlineIcon: GoHome,
    label: "ホーム",
  },
  {
    href: "/events",
    filledIcon: IoIosListBox,
    outlineIcon: IoIosList,
    label: "一覧",
  },
  {
    href: "/events/add",
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

export default function Footer() {
  const pathname = usePathname();
  return (
    <Box
      as="footer"
      display={{ md: "none" }}
      position="fixed"
      zIndex="1000"
      bottom="0"
      h={footerHeight}
      w="100vw"
      bg="#812c99"
      color="white"
      justifyContent="center"
    >
      <HStack
        h="100%"
        w="100%"
        justifyContent="space-evenly"
        alignItems="flex-start"
        pt="2"
        fontSize="xs"
      >
        {items.map((link) => {
          const Icon =
            pathname === link.href ? link.filledIcon : link.outlineIcon;
          const labelText =
            pathname === link.href ? <b>{link.label}</b> : link.label;
          return (
            <Link key={link.href} href={link.href}>
              <VStack w="4em" gap={0.5} justifyContent="center">
                <Icon size="2em" />
                <Text fontSize="xs">{labelText}</Text>
              </VStack>
            </Link>
          );
        })}
      </HStack>
    </Box>
  );
}
