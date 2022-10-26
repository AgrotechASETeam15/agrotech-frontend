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
import React, { useState, useRef } from "react";

const KitConfiguration = () => {
  const [isOpen, setisOpen] = useState(false);
  const [kitConfig, setkitConfig] = useState({
    soilMoisture: 20,
    valve: "Active",
  });
  const [editValue, seteditValue] = useState(kitConfig.soilMoisture);
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
          Kit Configuration
        </Text>
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        gap={"20px"}
        flexDirection={"column"}
        paddingTop={"60px"}
      >
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
            <Text>Soil moisture </Text>
            <Text>{`${kitConfig.soilMoisture}%`}</Text>
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
            <Text>Valve</Text>
            <Text color={"#0000FF"}>{kitConfig.valve}</Text>
          </Flex>
        </Box>
        <Button
          width={"300px"}
          height={"50px"}
          background={"#224957"}
          borderRadius={"10px"}
          color={"#ffffff"}
          _hover={{
            background: "#20DF7F",
          }}
          onClick={() => setisOpen(true)}
        >
          Configure
        </Button>
      </Flex>
      <Modal isCentered isOpen={isOpen} onClose={() => setisOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent="space-between" alignItems={"center"}>
              <Text>Soil moisture</Text>
              <Input
                value={editValue}
                onChange={(e) => seteditValue(e.target.value)}
                width={"100px"}
              />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                setisOpen(false);
                setkitConfig({
                  ...kitConfig,
                  soilMoisture: editValue,
                });
              }}
            >
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
export default KitConfiguration;
