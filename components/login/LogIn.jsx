import { Box, Button, Checkbox, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState, useLayoutEffect, useRef } from "react";
import "@fontsource/lexend-deca";
import "@fontsource/montserrat";
import { useRouter } from "next/router";

// api
import { postData } from "../../pages/api";

// utils
import Alert from "../../utils/Alert";
import { ValidateEmail, ValidatePassword } from "../../utils/validations";
import Spinner from "../loader/loader";

const LogIn = () => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  // validation
  const validation = () => {
    let error = {
      email: ValidateEmail(credentials.email),
      password: ValidatePassword(credentials.password),
    };
    setErrors(error);
    if (error.email === "" && error.password === "") {
      return true;
    } else {
      return false;
    }
  };
  /**
   * updating input field data and error text messages
   */
  const updateCredentials = (e) => {
    let error = {};
    switch (e.target.name) {
      case "email":
        error[e.target.name] = ValidateEmail(e.target.value);
        break;
      case "password":
        error[e.target.name] = ValidatePassword(e.target.value);
        break;
      default:
        break;
    }
    setErrors({ ...errors, ...error });
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  console.log(errors);
  const handleSubmit = async () => {
    const isvalidated = validation();
    console.log(isvalidated);
    setisLoading(true);
    if (isvalidated) {
      try {
        const response = await postData(`email/login`, credentials, false);
        if (response && response.apiStatus === 200) {
          router.push("/dashboard");
        } else if (response && response.status === 400) {
          console.log(response);
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
    }
    setisLoading(false);
  };
  return isLoading ? (
    <Spinner />
  ) : (
    <Flex
      justifyContent={"flex"}
      alignItems={"center"}
      direction={"column"}
      gap={"40px"}
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

          fontFamily={"Impact"}
          fontStyle={"normal"}
          fontWeight={"400"}
          fontSize={"64px"}
          lineHeight={"80px"}
          color={"#224957"}
          paddingTop={"100px"}
        >
          AGROTECH
        </Text>
      </Flex>

      <Flex justifyContent={"center"} alignItems={"center"} zIndex={"1"}>
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
              position={"relative"}
            >
              <Input
                width={"300px"}
                height={"50px"}
                type="email"
                borderColor={"#20DF7F"}
                //color={'white'}

                // background: #224957;
                // border-radius: 10px;
                _hover={{
                  borderColor: "#89F3BD",
                }}
                _placeholder={{
                  color: "#000000",
                }}
                background={"#FFFFFF"}
                borderRadius={"10px"}
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => updateCredentials(e)}
              />
              <Text
                color={"#ff0000"}
                position={"absolute"}
                top={"50"}
                left={"2"}
                fontSize={"12"}
              >
                {errors.email}
              </Text>
              <Input
                width={"300px"}
                height={"50px"}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                background={"#FFFFFF"}
                borderColor={"#20DF7F"}
                borderRadius={"10px"}
                _hover={{
                  borderColor: "#89F3BD",
                }}
                _placeholder={{
                  color: "#000000",
                }}
                color={"#000000"}
                onChange={(e) => updateCredentials(e)}
              />
              <Text
                color={"#ff0000"}
                position={"absolute"}
                bottom={"-5"}
                left={"2"}
                fontSize={"12"}
              >
                {errors.password}
              </Text>
            </Flex>
            <Flex mt={"18px"} gap={"14px"}>
              <a href="#forgot">
                <Text
                  fontFamily={"Montserrat"}
                  fontStyle={"normal"}
                  fontWeight={"500"}
                  fontSize={"14px"}
                  lineHeight={"17px"}
                  color={"#000000"}
                >
                  Forgot Password?
                </Text>
              </a>
            </Flex>
            <Flex justifyContent={"center"} alignItems={"center"} mt={"20px"}>
              <Button
                width={"300px"}
                height={"50px"}
                background={"#20DF7F"}
                borderRadius={"10px"}
                color={"#ffffff"}
                _hover={{
                  background: "#3FE992",
                  boxShadow: "2px 2px",
                }}
                onClick={() => handleSubmit()}
              >
                Log In
              </Button>
            </Flex>
            <Flex justifyContent={"flex-end"} alignItems={"center"}>
              <Text
                fontFamily={"Lexend Deca"}
                fontStyle={"normal"}
                fontWeight={"400"}
                fontSize={"16px"}
                lineHeight={"20px"}
                color={"#000000"}
                paddingTop={"15px"}
              >
                New User?
              </Text>
              <Text
                fontFamily={"Lexend Deca"}
                fontStyle={"normal"}
                textDecoration={"underline"}
                fontWeight={"400"}
                fontSize={"16px"}
                paddingLeft={"7px"}
                lineHeight={"20px"}
                color={"#000000"}
                paddingTop={"15px"}
                cursor={"pointer"}
                onClick={() => router.push("/sign-up")}
              >
                Sign Up
              </Text>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default LogIn;
