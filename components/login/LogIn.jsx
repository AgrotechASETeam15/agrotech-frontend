import { Box, Button, Checkbox, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
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

  /**
   * updating input field data and error text messages
   */
  const updateCredentials = (e) => {
    switch (e.target.name) {
      case "email":
        setErrors({ ...errors, email: ValidateEmail(e.target.value) });
        break;
      case "password":
        setErrors({ ...errors, password: ValidatePassword(e.target.value) });
        break;
      default:
        break;
    }
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    setisLoading(true);
    if (errors.email === "" && errors.password === "") {
      console.log("hello");
      try {
        const response = await postData(``, credentials, false);
        if (response && response.apiStatus === 200) {
          router.push("/dashboard");
        } else {
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
      justifyContent={"center"}
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

          fontFamily={"Lexend Deca"}
          fontStyle={"normal"}
          fontWeight={"400"}
          fontSize={"64px"}
          lineHeight={"80px"}
          color={"#224957"}
          paddingTop={"45px"}
        >
          AGROTECH
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
              position={"relative"}
            >
              <Input
                width={"300px"}
                height={"50px"}
                type="email"
                color={"white"}
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
                background={"#224957"}
                borderRadius={"10px"}
                _placeholder={{
                  color: "#FFFFFF",
                }}
                color={"white"}
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
            <Flex mt={"40px"} gap={"20px"}>
              <Flex
                gap={`10px`}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Checkbox
                  borderRadius={"5px"}
                  background={"#224957"}
                  border={"#224957"}
                />
                <Text
                  fontFamily={"Montserrat"}
                  fontStyle={"normal"}
                  fontWeight={"500"}
                  fontSize={"14px"}
                  lineHeight={"17px"}
                  color={"#093545"}
                >
                  Remember me
                </Text>
              </Flex>
              <Text
                fontFamily={"Montserrat"}
                fontStyle={"normal"}
                fontWeight={"500"}
                fontSize={"14px"}
                lineHeight={"17px"}
                color={"#093545"}
                cursor={"pointer"}
              >
                Forgot password?
              </Text>
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
                onClick={() => handleSubmit()}
              >
                Sign in
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default LogIn;
