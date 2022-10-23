import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <Box position={'relative'}>
        {children}
        <Image
          position={'fixed'}
          //  position: fixed;
          //  left: 0;
          //  bottom: 0;
          //  width: 100%;
          //  background-color: red;
          //  color: white;
          //  text-align: center;
          left='0px'
          bottom='0px'
          width='100%'
          src='/svgs/bg.svg'
          alt='background'
        />
      </Box>
    </>
  );
};

export default Layout;
