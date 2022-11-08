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
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { getData } from "../../pages/api";

import Alert from "../../utils/Alert";
import Loader from "../loader/loader";

const KitConfiguration = (props) => {
  const router = useRouter();

  const [isOpen, setisOpen] = useState(false);
  const [kitConfig, setkitConfig] = useState({ kit: {} });

  const [isLoading, setisLoading] = useState(false);

  const getKitData = async (id) => {
    setisLoading(true);
    try {
      const response = await getData(`drip/get-kit/${id}`, false);
      if (response && response.apiStatus === 200) {
        setkitConfig(response.kit);
      } else if (response && response.status === 400) {
        Alert({
          title: "Error",
          message: response.message
            ? response.message
            : "Something went wrong. Please try again after sometime",
          isCloseButton: false,
          buttonTextYes: "Ok",
        });
      }
    } catch (e) {
      console.log(e);
      setisLoading(false);
      Alert({
        title: "Error",
        message: "Something went wrong. Please try again after sometime",
        isCloseButton: false,
        buttonTextYes: "Ok",
      });
    }
    setisLoading(false);
  };
  useEffect(() => {
    if (!router.isReady) return;
    getKitData(router.query.id);
  }, [router.isReady]);

  console.log(kitConfig);
  return isLoading ? (
    <Loader />
  ) : (
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
          Kit Monitoring
        </Text>
      </Flex>

      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        gap={"20px"}
        flexDirection={"column"}
        paddingTop={"60px"}
      >
        <Text fontSize={20}>Kit Name: {kitConfig.kit_name}</Text>
        <Box
          maxW="lg"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          padding={"20px"}
        >
          <Flex
            justifyContent={"space-between"}
            width={"400px"}
            alignItems={"center"}
          >
            <Text>Soil moisture sensor 1 </Text>
            <Text>{`${kitConfig.sensor_one}%`}</Text>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            width={"400px"}
            alignItems={"center"}
            paddingTop={"20px"}
          >
            <Text>Valve</Text>
            <Text
              color={kitConfig.valve_one === "1" ? "#0000FF" : "#ff0000"}
              cursor={"pointer"}
            >
              {kitConfig.valve_one === "1" ? "Active" : "Inactive"}
            </Text>
          </Flex>
        </Box>
        <Box
          maxW="lg"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          padding={"20px"}
        >
          <Flex
            justifyContent={"space-between"}
            width={"400px"}
            alignItems={"center"}
          >
            <Text>Soil moisture sensor 2 </Text>
            <Text>{`${kitConfig.sensor_two}%`}</Text>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            width={"400px"}
            alignItems={"center"}
            paddingTop={"20px"}
          >
            <Text>Valve</Text>
            <Text
              color={kitConfig.valve_two === "1" ? "#0000FF" : "#ff0000"}
              cursor={"pointer"}
            >
              {kitConfig.valve_two === "1" ? "Active" : "Inactive"}
            </Text>
          </Flex>
        </Box>
        <Box
          maxW="lg"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          padding={"20px"}
        >
          <Flex
            justifyContent={"space-between"}
            width={"400px"}
            alignItems={"center"}
          >
            <Text>Soil moisture sensor 3 </Text>
            <Text>{`${kitConfig.sensor_three}%`}</Text>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            width={"400px"}
            alignItems={"center"}
            paddingTop={"20px"}
          >
            <Text>Valve</Text>
            <Text
              color={kitConfig.valve_three === "1" ? "#0000FF" : "#ff0000"}
              cursor={"pointer"}
            >
              {kitConfig.valve_three === "1" ? "Active" : "Inactive"}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
export default KitConfiguration;
