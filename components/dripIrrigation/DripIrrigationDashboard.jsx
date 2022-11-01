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
import React, { useState } from "react";
import { useRouter } from "next/router";
import {ImBin2} from "react-icons/im"

const DripIrrigation = () => {
  const router = useRouter();

  const [isOpen, setisOpen] = useState(false);

  const kits = [
    { kitName: "Kit one", id: "12323" },
    { kitName: "Kit two", id: "93483" },
    { kitName: "Kit three", id: "34656" },
  ];
  return (
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
          <Tbody>
            {kits.map((kit) => (
              <Tr key={kit.id}>
                <Td
                  cursor={"pointer"}
                  onClick={() => router.push(`/kit-configuration?id=${kit.id}`)}
                >
                  {kit.kitName}
                </Td>
                <Td
                  width={{
                    base: "100px",
                    lg: "300px",
                    md: "150px",
                    sm: "100px",
                  }}
                  cursor={"pointer"}
                  onClick={() => setisOpen(true)}
                >
                  <Flex alignItems={"center"}>
                    <ImBin2 color={"#ff0000"} />
                    <Text color={"#ff0000"} paddingLeft={"7px"} > Delete</Text>
                  </Flex>
                  
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>{" "}
      <Modal isCentered isOpen={isOpen} onClose={() => setisOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Work in progress</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>This feature will unlock in future.</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setisOpen(false)}>Ok</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* <Flex justifyContent={"center"} alignItems={"center"} gap={"20px"}>
        <Button
          width={"300px"}
          height={"50px"}
          background={"#224957"}
          borderRadius={"10px"}
          color={"#ffffff"}
          _hover={{
            background: "#20DF7F",
          }}
        >
          Kit one
        </Button>
        <Button
          width={"300px"}
          height={"50px"}
          background={"#224957"}
          borderRadius={"10px"}
          color={"#FF0000"}
          _hover={{
            background: "#20DF7F",
          }}
        >
          Delete kit
        </Button>
      </Flex>
      <Flex>
        <Button
          width={"300px"}
          height={"50px"}
          background={"#224957"}
          borderRadius={"10px"}
          color={"#ffffff"}
          _hover={{
            background: "#20DF7F",
          }}
        >
          Add kit
        </Button>
      </Flex> */}
    </Flex>
  );
};
export default DripIrrigation;
