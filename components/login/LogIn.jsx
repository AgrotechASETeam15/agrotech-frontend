import { Box, Button, Checkbox, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';
import '@fontsource/lexend-deca';
import '@fontsource/montserrat';

const LogIn = () => {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      direction={'column'}
      gap={'40px'}
      //   height={'100vh'}
    >
      <Flex justifyContent={'center'} alignItems={'center'}>
        <Text
          // font-family: 'Lexend Deca';
          // font-style: normal;
          // font-weight: 400;
          // font-size: 64px;
          // line-height: 80px;
          // /* identical to box height */
          // text-align: center;
          // color: #224957;

          fontfamily={'Lexend Deca'}
          fontStyle={'normal'}
          fontWeight={'400'}
          fontSize={'64px'}
          lineHeight={'80px'}
          color={'#224957'}
        >
          Sign in
        </Text>
      </Flex>
      <Flex justifyContent={'center'} alignItems={'center'}>
        <Text
          fontfamily={'Lexend Deca'}
          fontStyle={'normal'}
          fontWeight={'400'}
          fontSize={'16px'}
          lineHeight={'20px'}
          color={'#224957'}
        >
          Sign in and start managing your candidates!
        </Text>
      </Flex>
      <Flex justifyContent={'center'} alignItems={'center'}>
        <form>
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            direction={'column'}
          >
            <Flex
              gap={'35px'}
              direction={'column'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Input
                width={'300px'}
                height={'50px'}
                type='email'
                // background: #224957;
                // border-radius: 10px;

                _placeholder={{
                  color: '#FFFFFF',
                }}
                background={'#224957'}
                borderRadius={'10px'}
                name='email'
                id='email'
                placeholder='Email'
              />
              <Input
                width={'300px'}
                height={'50px'}
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                background={'#224957'}
                borderRadius={'10px'}
                _placeholder={{
                  color: '#FFFFFF',
                }}
              />
            </Flex>
            <Flex mt={'20px'} gap={'20px'}>
              <Flex
                gap={`10px`}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Checkbox
                  borderRadius={'5px'}
                  background={'#224957'}
                  border={'#224957'}
                />
                <Text
                  fontfamily={'Montserrat'}
                  fontStyle={'normal'}
                  fontWeight={'500'}
                  fontSize={'14px'}
                  lineHeight={'17px'}
                  color={'#093545'}
                >
                  Remember me
                </Text>
              </Flex>
              <Text
                fontfamily={'Montserrat'}
                fontStyle={'normal'}
                fontWeight={'500'}
                fontSize={'14px'}
                lineHeight={'17px'}
                color={'#093545'}
              >
                Forgot password?
              </Text>
            </Flex>
            <Flex justifyContent={'center'} alignItems={'center'} mt={'20px'}>
              <Button
                width={'300px'}
                height={'50px'}
                background={'#20DF7F'}
                borderRadius={'10px'}
                color={'#224957'}
                _hover={{
                  background: '#20DF7F',
                }}
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
