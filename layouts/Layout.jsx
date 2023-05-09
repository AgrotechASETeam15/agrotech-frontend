import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const isAuthRoutes =
    router.pathname === "/" ||
    router.pathname === "/login" ||
    router.pathname === "/sign-up";

  return (
    <>
      {!isAuthRoutes && (
        <Flex justifyContent={"flex-end"}>
          <Button
            marginRight={5}
            marginTop={5}
            onClick={() => {
              router.push("/");
            }}
          >
            Logout
          </Button>
        </Flex>
      )}
      {children}
      <Box position={"relative"}>
        <Image
          position={"fixed"}
          //  position: fixed;
          //  left: 0;
          //  bottom: 0;
          //  width: 100%;
          //  background-color: red;
          //  color: white;
          //  text-align: center;
          left="0px"
          bottom="0px"
          width="100%"
          src="/svgs/bg.svg"
          alt="background"
        />
      </Box>
    </>
  );
};

export default Layout;
