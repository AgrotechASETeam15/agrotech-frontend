import { Box, Button, Checkbox, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";

// api
import { postData } from "../../pages/api";

// utils
import Alert from "../../utils/Alert";
import {
  ValidateEmail,
  ValidateName,
  ValidatePassword,
} from "../../utils/validations";

const SignUp = () => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  // validation
  const validation = () => {
    let error = {
      name: ValidateName(credentials.name),
      email: ValidateEmail(credentials.email),
      password: ValidatePassword(credentials.password),
      confirmPassword:
        credentials.password !== credentials.confirmPassword
          ? "Password not matching"
          : ValidatePassword(credentials.confirmPassword),
    };
    setErrors(error);
    if (
      error.email === "" &&
      error.password === "" &&
      error.name === "" &&
      error.confirmPassword === ""
    ) {
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
      case "name":
        error[e.target.name] = ValidateName(e.target.value);
        break;
      case "email":
        error[e.target.name] = ValidateEmail(e.target.value);
        break;
      case "password":
        error[e.target.name] = ValidatePassword(e.target.value);
        break;
      case "confirmPassword":
        error[e.target.name] = ValidatePassword(e.target.value);
        break;
      default:
        break;
    }
    setErrors({ ...errors, ...error });
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const isvalidated = validation();
    // if (credentials.password !== credentials.confirmPassword) {
    //   setisValid(false);
    //   setErrors({ ...errors, confirmPassword: "Password is not matching" });
    //   return;
    // }
    if (isvalidated) {
      try {
        const response = await postData(`email/register`, credentials, false);
        if (response && response.apiStatus === 200) {
          router.push("/dashboard");
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
    }
    setisLoading(false);
  };
  console.log(errors);
  return (
    
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      gap={"10px"}
      paddingTop={"30px"}
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
          // paddingTop={"100px"}
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
            position={"relative"}
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
                borderColor= {"#89F3BD"}
                _placeholder={{
                  color: "#000000",
                }}
                background={"#FFFFFF"}
                borderRadius={"10px"}
                name="name"
                id="name"
                placeholder="Name"
                onChange={(e) => updateCredentials(e)}
              />
              <Text
                color={"#ff0000"}
                position={"absolute"}
                top={"50"}
                left={"2"}
                fontSize={"12"}
              >
                {errors.name}
              </Text>
              <Input
                width={"300px"}
                height={"50px"}
                type="email"
                // background: #224957;
                // border-radius: 10px;
                borderColor= {"#89F3BD"}
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
                top={"136"}
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
                borderColor= {"#89F3BD"}
                placeholder="Password"
                background={"#FFFFFF"}
                borderRadius={"10px"}
                _placeholder={{
                  color: "#000000",
                }}
                onChange={(e) => updateCredentials(e)}
              />
              <Text
                color={"#ff0000"}
                position={"absolute"}
                top={"220"}
                left={"2"}
                fontSize={"12"}
              >
                {errors.password}
              </Text>
              <Input
                width={"300px"}
                height={"50px"}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                borderColor= {"#89F3BD"}
                background={"#FFFFFF"}
                borderRadius={"10px"}
                _placeholder={{
                  color: "#000000",
                }}
                onChange={(e) => updateCredentials(e)}
              />
              <Text
                color={"#ff0000"}
                position={"absolute"}
                top={"304"}
                left={"2"}
                fontSize={"12"}
              >
                {errors.confirmPassword}
              </Text>
            </Flex>
            <Flex justifyContent={"center"} alignItems={"center"} mt={"30px"}>
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
                Register
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
                Already a User?
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
                onClick={() => router.push("/login")}
              >
                Log In
              </Text>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default SignUp;
