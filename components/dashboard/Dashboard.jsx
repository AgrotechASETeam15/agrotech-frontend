import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Text,
  Modal,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();

  const [isOpen, setisOpen] = useState(false);

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      gap={"40px"}
      paddingTop={"45px"}
      //   height={'100vh'}
    >
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Text
          fontFamily={"Lexend Deca"}
          fontStyle={"normal"}
          fontWeight={"400"}
          fontSize={"64px"}
          lineHeight={"80px"}
          color={"#224957"}
        >
          Dashboard
        </Text>
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={"20px"}
      >
        <Button
          width={"300px"}
          height={"50px"}
          background={"#FFFFFF"}
          borderWidth={"1px"}
          borderColor={"#20DF7F"}
          borderRadius={"10px"}
          color={"#000000"}
          _hover={{
            background: "#20DF7F",
          }}
          onClick={() => router.push("/drip-irrigation")}
        >
          Drip Irrigation
        </Button>
        <Button
          width={"300px"}
          height={"50px"}
          background={"#FFFFFF"}
          borderWidth={"1px"}
          borderColor={"#20DF7F"}
          borderRadius={"10px"}
          color={"#000000"}
          _hover={{
            background: "#20DF7F",
          }}
          onClick={() => router.push("/pesticides")}
        >
          Pesticides
        </Button>
        <Button
          width={"300px"}
          height={"50px"}
          background={"#FFFFFF"}
          borderWidth={"1px"}
          borderColor={"#20DF7F"}
          borderRadius={"10px"}
          color={"#000000"}
          _hover={{
            background: "#20DF7F",
          }}
          onClick={() => router.push("/greenhouse")}
        >
          Green House
        </Button>
      </Flex>
    </Flex>
  );
};
export default Dashboard;
