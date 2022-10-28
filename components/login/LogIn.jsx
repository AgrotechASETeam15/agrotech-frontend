import { Box, Button, Checkbox, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react';
import '@fontsource/lexend-deca';
import '@fontsource/montserrat';

const LogIn = () => {
  return (
    <Flex
      justifyContent={'flex'}
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

          fontFamily={'Impact'}
          fontStyle={'normal'}
          fontWeight={'400'}
          fontSize={'64px'}
          lineHeight={'80px'}
          color={'#224957'}
          paddingTop={'100px'}
        >
          AGROTECH
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
                borderColor={'#20DF7F'}
                //color={'white'}
                // background: #224957;
                // border-radius: 10px;
                _hover={{
                  borderColor: '#89F3BD'
                }}
                _placeholder={{
                  color: '#000000',
                }}
                background={'#FFFFFF'}
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
                background={'#FFFFFF'}
                borderColor={'#20DF7F'}
                borderRadius={'10px'}
                _hover={{
                  borderColor: '#89F3BD'
                }}
                _placeholder={{
                  color: '#000000',
                }}
                color={'white'}
              />
            </Flex>
            <Flex mt={'18px'} gap={'14px'}>
              
                <a href='#forgot'>
                <Text
                    fontFamily={'Montserrat'}
                    fontStyle={'normal'}
                    fontWeight={'500'}
                    fontSize={'14px'}
                    lineHeight={'17px'}
                    color={'#000000'}
                  >
                    Forgot Password?
                  </Text>
                </a>
                  
            </Flex>
            <Flex justifyContent={'center'} alignItems={'center'} mt={'20px'}>
              <Button
                width={'300px'}
                height={'50px'}
                background={'#20DF7F'}
                borderRadius={'10px'}
                color={'#ffffff'}

                
                _hover={{
                  background: '#3FE992',
                  boxShadow: '2px 2px',
                }}
              >
                Log In
              </Button>
            </Flex>
            <Flex justifyContent={'flex-end'} alignItems={'center'} >
              
              
              <Text
                  fontFamily={'Lexend Deca'}
                  fontStyle={'normal'}
                  fontWeight={'400'}
                  fontSize={'16px'}
                  lineHeight={'20px'}
                  color={'#000000'}
                  paddingTop={'15px'}
                >
                  New User? 
                </Text>
                <a href='#signUp'>
                <Text
                  fontFamily={'Lexend Deca'}
                  fontStyle={'normal'}
                  textDecoration={'underline'}
                  fontWeight={'400'}
                  fontSize={'16px'}
                  paddingLeft={'7px'}
                  lineHeight={'20px'}
                  color={'#000000'}
                  paddingTop={'15px'}
                  
                >
                  Sign Up
                </Text>
              </a>
                
          </Flex>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default LogIn;
