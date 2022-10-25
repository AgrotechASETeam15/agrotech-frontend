import { Box, Button, Checkbox, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const SignUp = () => {
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
          // font-family: 'Lexend Deca';
          // font-style: normal;
          // font-weight: 400;
          // font-size: 64px;
          // line-height: 80px;
          // /* identical to box height */
          // text-align: center;
          // color: #224957;

          fontFamily={"Lexend Deca"}
          fontStyle={"normal"}
          fontWeight={"400"}
          fontSize={"64px"}
          lineHeight={"80px"}
          color={"#224957"}
        >
          Register
        </Text>
      </Flex>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <form>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            direction={"column"}
          >
            <Flex
              gap={"35px"}
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Input
                width={"300px"}
                height={"50px"}
                type="text"
                // background: #224957;
                // border-radius: 10px;

                _placeholder={{
                  color: "#FFFFFF",
                }}
                background={"#224957"}
                borderRadius={"10px"}
                name="name"
                id="name"
                placeholder="Name"
              />
              <Input
                width={"300px"}
                height={"50px"}
                type="email"
                // background: #224957;
                // border-radius: 10px;

                _placeholder={{
                  color: "#FFFFFF",
                }}
                background={"#224957"}
                borderRadius={"10px"}
                name="email"
                id="email"
                placeholder="Email"
              />
              <Input
                width={"300px"}
                height={"50px"}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                background={"#224957"}
                borderRadius={"10px"}
                _placeholder={{
                  color: "#FFFFFF",
                }}
              />
              <Input
                width={"300px"}
                height={"50px"}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                background={"#224957"}
                borderRadius={"10px"}
                _placeholder={{
                  color: "#FFFFFF",
                }}
              />
            </Flex>
            <Flex justifyContent={"center"} alignItems={"center"} mt={"20px"}>
              <Button
                width={"300px"}
                height={"50px"}
                background={"#20DF7F"}
                borderRadius={"10px"}
                color={"#224957"}
                _hover={{
                  background: "#20DF7F",
                }}
              >
                Register
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default SignUp;
