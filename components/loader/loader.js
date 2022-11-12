import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Flex mt={"30%"} justifyContent={"center"} alignItems={"center"}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="green.500"
        size="xl"
      />
    </Flex>
  );
};
export default Loader;
