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

const DripIrrigation = () => {
  const toast = useToast();
  const router = useRouter();

  const [isOpen, setisOpen] = useState(false);
  const [isClickDelete, setisClickDelete] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [kitName, setkitName] = useState("");
  const [updatePage, setupdatePage] = useState(false);
  const [kits, setkits] = useState([]);

  const [selectedKitId, setselectedKitId] = useState("");

  const getDripIrrigationData = async () => {
    setisLoading(true);
    try {
      const response = await getData(`drip/get-kits`, false);
      if (response && response.apiStatus === 200) {
        setkits(response.kits);
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
    getDripIrrigationData();
  }, [updatePage]);

  const handleAddKit = async () => {
    setisLoading(true);
    try {
      const response = await postData(
        `drip/add-kit`,
        {
          kitName: kitName,
          kitStatus: "active",
          sensorOne: "50",
          sensorTwo: "50",
          sensorThree: "50",
          valveOne: "0",
          valveTwo: "0",
          valveThree: "0",
        },
        false
      );
      if (response && response.apiStatus === 200) {
        setupdatePage(!updatePage);
        toast({
          title: "Kit added",
          description:
            "New kit is added to your garden to automate drip irrigation.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else if (response && response.status === 400) {
        Alert({
          title: "Error",
          message: response.message.message
            ? response.message.message
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
  const handleDeleteKit = async (id) => {
    setisLoading(true);
    try {
      const response = await deleteData(
        `drip/delete-kit/${id}`,
        {
          kitId: id,
        },
        false
      );
      if (response && response.apiStatus === 200) {
        setupdatePage(!updatePage);
        toast({
          title: "Kit deleted",
          description: "Kit deleted successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else if (response && response.status === 400) {
        Alert({
          title: "Error",
          message: response.message.message
            ? response.message.message
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
          Drip Irrigation
        </Text>
      </Flex>
      <Flex alignSelf={"flex-end"} marginTop={"20px"}>
        <Button
          width={"150px"}
          height={"30px"}
          background={"#ffffff"}
          borderRadius={"10px"}
          borderWidth={"2px"}
          borderColor={"#20DF7F"}
          color={"#000000"}
          _hover={{
            background: "#20DF7F",
          }}
          onClick={() => setisOpen(true)}
        >
          + Add kit
        </Button>
      </Flex>
      <TableContainer width={"100%"}>
        <Table size="lg">
          <Thead>
            <Tr>
              <Th>Kits</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          {kits.length > 0 ? (
            <Tbody>
              {kits.map((kit) => (
                <Tr key={kit.id}>
                  <Td
                    cursor={"pointer"}
                    onClick={() =>
                      router.push(`/kit-configuration?id=${kit.kit_id}`)
                    }
                  >
                    {kit.kit_name}
                  </Td>
                  <Td
                    width={{
                      base: "100px",
                      lg: "300px",
                      md: "150px",
                      sm: "100px",
                    }}
                    cursor={"pointer"}
                    onClick={() => {
                      setisClickDelete(true);
                      setselectedKitId(kit.kit_id);
                    }}
                  >
                    <Flex alignItems={"center"}>
                      <ImBin2 color={"#ff0000"} />
                      <Text color={"#ff0000"} paddingLeft={"7px"}>
                        {" "}
                        Delete
                      </Text>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          ) : (
            <Tbody>
              <Tr>
                <Td>No kits present</Td>
              </Tr>
            </Tbody>
          )}
        </Table>
      </TableContainer>
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
export default DripIrrigation;
