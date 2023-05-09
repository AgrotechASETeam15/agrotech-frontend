import {
  Box,
  Button,
  Checkbox,
  Flex,
  Input,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Modal,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { deleteData, getData, postData } from "../../pages/api";
import { useToast } from "@chakra-ui/react";
// utils
import Alert from "../../utils/Alert";
import Loader from "../loader/loader";
import { ImBin2 } from "react-icons/im";

const MINUTE_MS = 200;
const GreenHouse = () => {
  const toast = useToast();
  const router = useRouter();

  const [isOpen, setisOpen] = useState(false);
  const [isClickDelete, setisClickDelete] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [kitName, setkitName] = useState("");
  const [updatePage, setupdatePage] = useState(false);
  const [kit, setkit] = useState();

  const [selectedKitId, setselectedKitId] = useState("");

  const getGreenHouseData = async () => {
    // setisLoading(true);
    try {
      const response = await getData(
        `greenhouse/get-kit/${"be938215-a2c2-4b66-b994-40518a55368e"}`,
        false
      );
      if (response && response.apiStatus === 200) {
        setkit(response.kit);
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
    // updateKit(router.query.id);
    getGreenHouseData();
    const interval = setInterval(() => {
      getGreenHouseData();
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, [router.isReady]);

  return isLoading ? (
    <Loader />
  ) : (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      gap={"40px"}
      paddingTop={"45px"}
      padding={"20px"}
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
          Green House Configuration
        </Text>
      </Flex>
      <Flex direction={"column"}>
        <Box maxW="lg" borderRadius="lg" overflow="hidden" padding={"20px"}>
          <Flex
            justifyContent={"space-between"}
            width={"400px"}
            alignItems={"center"}
          >
            <Text>Temperature :</Text>
            <Text>{kit && kit.tempreture} °C</Text>
          </Flex>
        </Box>
        {/* <Box maxW="lg" borderRadius="lg" overflow="hidden" padding={"20px"}>
            <Flex
              justifyContent={"space-between"}
              width={"400px"}
              alignItems={"center"}
            >
              <Text>Ventilation :</Text>
              <Text>0</Text>
            </Flex>
          </Box>
          <Box maxW="lg" borderRadius="lg" overflow="hidden" padding={"20px"}>
            <Flex
              justifyContent={"space-between"}
              width={"400px"}
              alignItems={"center"}
            >
              <Text>CO2 :</Text>
              <Text>0</Text>
            </Flex>
          </Box> */}
        <Box maxW="lg" borderRadius="lg" overflow="hidden" padding={"20px"}>
          <Flex
            justifyContent={"space-between"}
            width={"400px"}
            alignItems={"center"}
          >
            <Text>Humidity :</Text>
            <Text>{kit && kit.humidity}%</Text>
          </Flex>
        </Box>
        <Box maxW="lg" borderRadius="lg" overflow="hidden" padding={"20px"}>
          <Flex
            justifyContent={"space-between"}
            width={"400px"}
            alignItems={"center"}
          >
            <Text>Smoke Intencity:</Text>
            <Text>{kit && kit.smoke} ppm</Text>
          </Flex>
        </Box>
        <Box maxW="lg" borderRadius="lg" overflow="hidden" padding={"20px"}>
          <Flex
            justifyContent={"space-between"}
            width={"400px"}
            alignItems={"center"}
          >
            <Text>Soil Moisture :</Text>
            <Text>{kit && kit.soil_moisture}%</Text>
          </Flex>
        </Box>
        {/* <Box maxW="lg" borderRadius="lg" overflow="hidden" padding={"20px"}>
          <Flex
            justifyContent={"space-between"}
            width={"400px"}
            alignItems={"center"}
          >
            <Text>Light density :</Text>
            <Text>{kit && kit.light_density}</Text>
          </Flex>
        </Box> */}
        {/* <Box maxW="lg" borderRadius="lg" overflow="hidden" padding={"20px"}>
          <Flex
            justifyContent={"space-between"}
            width={"400px"}
            alignItems={"center"}
          >
            <Text>Soil Sensor :</Text>
            <Text>0</Text>
          </Flex>
        </Box>
        <Box maxW="lg" borderRadius="lg" overflow="hidden" padding={"20px"}>
          <Flex
            justifyContent={"space-between"}
            width={"400px"}
            alignItems={"center"}
          >
            <Text>Lights :</Text>
            <Text>0</Text>
          </Flex>
        </Box> */}
      </Flex>
      <Modal isCentered isOpen={isOpen} onClose={() => setisOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new kit</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent="space-between" alignItems={"center"}>
              <Text>Name of kit</Text>
              <Input
                value={kitName}
                onChange={(e) => setkitName(e.target.value)}
                width={"100px"}
              />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                setisOpen(false);
                handleAddKit();
              }}
            >
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isCentered
        isOpen={isClickDelete}
        onClose={() => setisClickDelete(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to delete this kit?</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                setisClickDelete(false);
                handleDeleteKit(selectedKitId);
              }}
            >
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
export default GreenHouse;
