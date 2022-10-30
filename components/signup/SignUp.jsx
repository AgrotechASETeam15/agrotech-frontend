import { Box, Button, Checkbox, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
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
      case "confirmPassword":
        setErrors({
          ...errors,
          confirmPassword: ValidatePassword(e.target.value),
        });
        break;
      case "name":
        setErrors({ ...errors, name: ValidateName(e.target.value) });
        break;
      default:
        break;
    }
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setisLoading(true);
    if (credentials.password !== credentials.confirmPassword) {
      setErrors({ ...errors, confirmPassword: "Password is not matching" });
      return;
    }
    if (
      errors.email === "" &&
      errors.password === "" &&
      errors.name === "" &&
      errors.confirmPassword === ""
    ) {
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
  console.log(errors);
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

                _placeholder={{
                  color: "#FFFFFF",
                }}
                background={"#224957"}
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
                placeholder="Password"
                background={"#224957"}
                borderRadius={"10px"}
                _placeholder={{
                  color: "#FFFFFF",
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
                background={"#224957"}
                borderRadius={"10px"}
                _placeholder={{
                  color: "#FFFFFF",
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
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default SignUp;
