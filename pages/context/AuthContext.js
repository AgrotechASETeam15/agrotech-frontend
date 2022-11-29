import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";
import LogIn from "../../components/login/LogIn";
import SignUp from "../../components/signup/SignUp.jsx";
import Layout from "../../layouts/Layout";

export const AuthContext = createContext({});

export default function AuthContextProvider({ children }) {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const value = {
    isAuthenticated,
    setisAuthenticated,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const ProtectRoute = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    if (router.pathname == "/sign-up") {
      return (
        <Layout>
          <SignUp />
        </Layout>
      );
    } else {
      return (
        <Layout>
          <LogIn />
        </Layout>
      );
    }
  }
  return children;
};
