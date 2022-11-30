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

const MINUTE_MS = 200;

const KitConfiguration = (props) => {
  const router = useRouter();

  const [isOpen, setisOpen] = useState(false);
  const [kitConfig, setkitConfig] = useState({ kit: {} });

  const [isLoading, setisLoading] = useState(false);

  const getKitData = async (id) => {
    // setisLoading(true);
    try {
      const response = await getData(`pesticides/get-kit/${id}`, false);
      if (response && response.apiStatus === 200) {
        console.log(response);
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
      // setisLoading(false);
      Alert({
        title: "Error",
        message: "Something went wrong. Please try again after sometime",
        isCloseButton: false,
        buttonTextYes: "Ok",
      });
    }
    // setisLoading(false);
  };
  useEffect(() => {
    if (!router.isReady) return;
    getKitData(router.query.id);
    const interval = setInterval(() => {
      getKitData(router.query.id);
    }, MINUTE_MS);

    return () => clearInterval(interval);
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
      paddingTop={"30px"}
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
        paddingTop={"10px"}
        zIndex={"1"}
      >
        <Text fontSize={20}>Kit Name: {kitConfig.kit_name}</Text>
        <Box
          maxW="lg"
          borderRadius="lg"
          overflow="hidden"
          padding={"20px"}
          borderColor={"#20DF7F"}
          borderWidth={"medium"}
        >
          <Flex
            justifyContent={"space-between"}
            width={"400px"}
            alignItems={"center"}
          >
            <Text>Soil NPK sensor 1 </Text>
            <Text>{`${kitConfig.sensor_one}%`}</Text>
          </Flex>
          <Flex
            justifyContent={"space-between"}
            width={"400px"}
            alignItems={"center"}
            paddingTop={"20px"}
          >
            <Text>Soil NPK sensor 2 </Text>
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
              color={
                parseFloat(kitConfig.sensor_one) +
                  parseFloat(kitConfig.sensor_two) / 2 >
                50
                  ? "#ff0000"
                  : "#0000FF"
              }
              cursor={"pointer"}
            >
              {parseFloat(kitConfig.sensor_one) +
                parseFloat(kitConfig.sensor_two) / 2 >
              50
                ? "Inactive"
                : "Active"}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
export default KitConfiguration;
