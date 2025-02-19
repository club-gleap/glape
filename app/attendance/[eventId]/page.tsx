"use client";
import {
  Box,
  Button,
  Center,
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { attendanceIcon } from "@/features/event/components/attendanceIcon";
import { useDiffTimes } from "@/features/event/components/useDiffTimes";
import { useDateOfTheEvent } from "@/features/event/components/useDateOfTheEvent";

export default function Home() {
  //出欠を管理する
  //userデータ及びeventデータは仮のものとする

  const userId = 1;//実際にはsessionから読み込むかな？
  const eventId = useParams().eventId;

  return <Center flexDirection="column"></Center>;
}
