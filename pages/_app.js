import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../layouts/Layout";
import "../styles/Alert.css";
import React, { useContext, useEffect } from "react";
import AuthContextProvider, {
  AuthContext,
  ProtectRoute,
} from "./context/AuthContext";

// context

function MyApp({ Component, pageProps }) {
  const { isAuthenticated, setisAuthenticated } = useContext(AuthContext);

  const check = () => {
    console.log(localStorage.getItem("agrotech_auth"));
    // setisAuthenticated(true);
    // if (localStorage.getItem("agrotech_auth")) {
    //   setisAuthenticated(true);
    // } else {
    //   setisAuthenticated(true);
    // }
  };

  useEffect(() => {
    check();
  }, []);

  return (
    // <AuthContextProvider>
    <ChakraProvider>
      {/* <ProtectRoute> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </ProtectRoute> */}
    </ChakraProvider>
    // </AuthContextProvider>
  );
}

export default MyApp;
