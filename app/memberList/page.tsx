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

export default function MemberList() {
  //仮のデータ。本番ではどこかからデータを読み込む？
  const [allMembers, setMembers] = useState({
    田中: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjt-bzPefGvMhHKHwghRbqNmlUqLpx_LhFoMq5Tq5Sl-eaeinrP_2sdSxIjdYHk6R5vOsIwYN_grUOWysKpGnExDqtLhb9Cs3CN3ZUHeJ6x3J7TrS4kGsiuLpZXnqfF_Lv0oSNJtqUAXyA/s800/icon_business_man02.png",
    佐藤: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoMp7sL7BcgiOAIa6UbFCOJ9rjYJHKZ8S-YU6WgcJh_tkt7adUvtSEnt0BifDnAcz6wKaCW20NZlmDA0CqZMEsFVIDsDIr6rv1rbhvddWgEb_FYIKVAbr9IqAwRl_sT6ujPhh857uINp8/s800/icon_business_man03.png",
    斎藤: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWj5thiii4nvWaL_R6iECTT3TmuwQYsLGT8PC3GxKuiNnHfSzSjOP4YK2anyMXLsLhVMSW6kJShcgea2OkAHu3T3GmNNVOXn9ABwt-v1iaHT1sx7SNN8i9o_KUCWdUDdCCAi5cMky3m74/s800/icon_business_man10.png",
    中田: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMacnM6BrsFu-e0w9ZFZhyhSu-uoNBcfQ1hGDaVfcPeNOhpFylRFJuu3o6lf2tLCtXRI3J08FBsm1G_35qcqVwEbm3PBbMyOhbj1G3BfWE3ANk3F7V_na7963kds03gCmeUvsBTg5uCrg/s140/icon_business_man16.png",
  });
  //ここまで仮のデータ

  return (
    <Center flexDirection="column">
      <Stack spacing={8} width={{ base: "90%", md: "50%" }} mt="20px">
        <TableContainer borderColor="black" borderWidth="1px">
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th>Icon</Th>
                <Th>名前</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Object.entries(allMembers).map(([name, image], index) => (
                <Tr key={index}>
                  <Td>
                    <img
                      src={image} // 画像URLをsrc属性に設定
                      width="30px" // サイズを指定（必要に応じて調整）
                      height="40px"
                      style={{ borderRadius: "50%" }} // 画像を円形にするスタイル
                    />
                  </Td>
                  <Td fontSize="20px">{name}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </Center>
  );
}
