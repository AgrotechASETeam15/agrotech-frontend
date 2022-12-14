import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../layouts/Layout";
import "../styles/Alert.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
